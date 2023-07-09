import { useLazyQuery } from "@airstack/airstack-react";
import UNIVERSAL_RESOLVER from "./graphql/resolve";
import UniversalResolver from "./components/UniversalResolver";

function App() {
  const [resolveIdentity, { data }] = useLazyQuery(
    UNIVERSAL_RESOLVER,
    {},
    { cache: false }
  );

  return <UniversalResolver data={data} onButtonClick={resolveIdentity} />;
}

export default App;
