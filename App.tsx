import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/Home";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function App() {
  const client = new ApolloClient({
    uri: "http://10.10.10.45:4000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
