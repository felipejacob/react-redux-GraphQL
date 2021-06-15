import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ApolloProvider>,
  rootElement
);

