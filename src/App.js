import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import CharactersQuery from "./components/CharactersQuery";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={CharactersQuery} />
    </Switch>
  );
}

export default App;
