import { useLazyQuery } from "@airstack/airstack-react";
import UNIVERSAL_RESOLVER from "./graphql/resolve";
import LensResolver from "./components/LensResolver";

function App() {
  const [resolveIdentity, { data, loading }] = useLazyQuery(
    UNIVERSAL_RESOLVER,
    {},
    { cache: false }
  );

  return (
    <LensResolver
      data={data}
      loading={loading}
      onButtonClick={resolveIdentity}
    />
  );
}

export default App;
