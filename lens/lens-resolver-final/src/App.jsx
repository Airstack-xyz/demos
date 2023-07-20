import { useLazyQuery } from "@airstack/airstack-react";
import LENS_RESOLVER from "./graphql/resolve";
import LensResolver from "./components/LensResolver";

function App() {
  const [resolveIdentity, { data, loading }] = useLazyQuery(
    LENS_RESOLVER,
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
