/* eslint-disable no-unsafe-optional-chaining */
import { useMemo } from "react";
import { gql, useQuery } from "@apollo/client";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import StandardImageList from "../components/ERC6551Portfolio";
import { ERC6551_USER_BALANCE } from "../graphql/erc6551";

const Portfolio = () => {
  // Test out with 0xcf94ba8779848141d685d44452c975c2ddc04945
  const { data, loading } = useQuery(gql(ERC6551_USER_BALANCE), {
    variables: { address: "0xcf94ba8779848141d685d44452c975c2ddc04945" },
  });
  const address = useMemo(
    () => data?.Wallet?.addresses?.[0],
    [data?.Wallet?.addresses]
  );
  const erc6551Data = useMemo(
    () =>
      data?.Wallet?.tokenBalances?.map(({ tokenNfts }) => {
        const { address, tokenId, token, contentValue } = tokenNfts ?? {};
        return {
          address,
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
        <Grid item xs={12}>
          {address?.slice(0, 6)}...{address?.slice(-6)}
        </Grid>
        {identitiesData?.filter?.(({ name }) => Boolean(name))?.length > 0 && (
          <Grid item xs={12}>
            <Stack direction="row" spacing={1}>
              {identitiesData?.map(({ type, name }, index) => (
                <Chip
                  label={name}
                  key={index}
                  avatar={<Avatar src={`${type}.svg`} />}
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