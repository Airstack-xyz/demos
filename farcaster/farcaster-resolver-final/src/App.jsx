import { useLazyQuery } from "@airstack/airstack-react";
import FARCASTER_RESOLVER from "./graphql/resolve";
import FarcasterResolver from "./components/FarcasterResolver";

function App() {
  const [resolveIdentity, { data, loading }] = useLazyQuery(
    FARCASTER_RESOLVER,
    {},
    { cache: false }
  );

  return (
    <FarcasterResolver
      data={data}
      loading={loading}
      onButtonClick={resolveIdentity}
    />
  );
}

export default App;
