/* eslint-disable no-unsafe-optional-chaining */
import { useMemo } from "react";
import { useLazyQuery } from "@airstack/airstack-react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import StandardImageList from "../components/ERC6551Portfolio";
import { ERC6551_USER_BALANCE } from "../graphql/erc6551";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Portfolio = () => {
  const { identity } = useParams();
  // Test out with 0xcf94ba8779848141d685d44452c975c2ddc04945
  const [fetchUserBalance, { data, loading }] = useLazyQuery(
    ERC6551_USER_BALANCE,
    {}
  );
  const address = useMemo(
    () => data?.TokenBalances?.TokenBalance?.[0]?.owner?.addresses?.[0],
    [data?.TokenBalances?.TokenBalance]
  );
  const ownerNft = useMemo(
    () => data?.Accounts?.Account?.[0]?.nft,
    [data?.Accounts?.Account]
  );

  const erc6551Data = useMemo(
    () =>
      data?.TokenBalances?.TokenBalance?.map(
        ({ tokenNfts, token, tokenId }) => {
          const { contentValue, erc6551Accounts, blockchain } = tokenNfts ?? {};
          const { name, symbol, type } = token ?? {};
          return {
            address: erc6551Accounts?.[0]?.address?.addresses?.[0],
            tokenId,
            image: contentValue?.image?.original,
            symbol,
            blockchain,
            isErc6551Exist: erc6551Accounts?.length > 0,
            name,
            type,
          };
        }
      ),
    [data?.TokenBalances?.TokenBalance]
  );
  const identitiesData = useMemo(() => {
    const { socials, primaryDomain } =
      data?.TokenBalances?.TokenBalance?.[0]?.owner ?? {};
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
  }, [data?.TokenBalances?.TokenBalance]);

  useEffect(() => {
    fetchUserBalance({ address: identity });
  }, [fetchUserBalance, identity]);

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={3}
      >
        {!loading && (
          <>
            {ownerNft ? (
              <>
                <div
                  style={{
                    backgroundImage: `url(${
                      ownerNft?.contentValue?.image?.original ??
                      "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
                    })`,
                    width: "15vw",
                    aspectRatio: "1/1",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    cursor: "pointer",
                    borderRadius: "20px",
                  }}
                />
                <p>
                  {ownerNft?.token?.name} #{ownerNft?.tokenId}
                </p>
                <b>{ownerNft?.token?.symbol}</b>
              </>
            ) : (
              <Grid item xs={12}>
                <Avatar src={null} sx={{ width: "15vw", height: "15vw" }} />
              </Grid>
            )}
          </>
        )}
        {address && !ownerNft && (
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
