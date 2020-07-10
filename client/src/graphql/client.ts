import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";

const httpUrl = "http://localhost:8000/graphql";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: httpUrl }),
});

export default client;
