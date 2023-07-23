import { useLazyQuery } from "@airstack/airstack-react";
import UNIVERSAL_RESOLVER from "./graphql/resolve";
import UniversalResolver from "./components/UniversalResolver";

function App() {
  const [resolveIdentity, { data, loading }] = useLazyQuery(
    UNIVERSAL_RESOLVER,
    {},
    { cache: false }
  );

  console.log(data);

  return (
    <UniversalResolver
      data={data}
      loading={loading}
      onButtonClick={resolveIdentity}
    />
  );
}

export default App;
