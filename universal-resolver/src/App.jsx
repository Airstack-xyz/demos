import { useQuery } from "@airstack/airstack-react";
import UNIVERSAL_RESOLVER from "./graphql/resolve";
import UniversalResolver from "./components/UniversalResolver";

function App() {
  const { data } = useQuery(
    UNIVERSAL_RESOLVER,
    {
      contractAddress: "0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03",
      blockchain: "ethereum",
    },
    { cache: false }
  );

  console.log(data);

  return <UniversalResolver />;
}

export default App;
