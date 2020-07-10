import React from "react";
import { ApolloProvider } from "react-apollo";

import client from "../graphql/client";

import "../public/styles/styles.css";
import Listing from "./Listing";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Listing />
    </ApolloProvider>
  );
};

export default App;
