/* eslint-disable no-unsafe-optional-chaining */
import { useMemo } from "react";
import { gql, useQuery } from "@apollo/client";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import StandardImageList from "../components/ERC6551Portfolio";
import { ERC6551_USER_BALANCE } from "../graphql/erc6551";
import { useParams } from "react-router-dom";

const Portfolio = () => {
  const { identity } = useParams();
  // Test out with 0xcf94ba8779848141d685d44452c975c2ddc04945
  const { data, loading } = useQuery(gql(ERC6551_USER_BALANCE), {
    variables: { address: identity },
  });
  const address = useMemo(
    () => data?.Wallet?.addresses?.[0],
    [data?.Wallet?.addresses]
  );
  const erc6551Data = useMemo(
    () =>
      data?.Wallet?.tokenBalances?.map(({ tokenNfts }) => {
        const { tokenId, token, contentValue, erc6551Accounts } =
          tokenNfts ?? {};
        return {
          address: erc6551Accounts?.[0]?.address?.addresses?.[0],
          tokenId,
          image: contentValue?.image?.original,
          symbol: token?.symbol,
        };
      }),
    [data?.Wallet?.tokenBalances]
  );
  const identitiesData = useMemo(() => {
    const { socials, primaryDomain } = data?.Wallet ?? {};
    return [
      {
        type: "ens",
        name: primaryDomain?.name,
      },
      ...(socials ?? [])?.map(({ dappName, profileName }) => ({
        type: dappName,
        name: profileName,
      })),
    ];
  }, [data?.Wallet]);

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={3}
      >
        <Grid item xs={12}>
          <Avatar src={null} sx={{ width: 100, height: 100 }} />
        </Grid>
        {address && (
          <Grid item xs={12}>
            {address?.slice(0, 10)}...{address?.slice(-10)}
          </Grid>
        )}
        {identitiesData?.filter?.(({ name }) => Boolean(name))?.length > 0 && (
          <Grid item xs={12}>
            <Stack direction="row" spacing={1}>
              {identitiesData
                ?.filter?.(({ name }) => Boolean(name))
                .map(({ type, name }, index) => (
                  <Chip
                    label={name}
                    key={index}
                    avatar={<Avatar src={`/${type}.svg`} />}
                  />
                ))}
            </Stack>
          </Grid>
        )}
        <Grid item xs={12}>
          <StandardImageList data={erc6551Data} loading={loading} />
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;
