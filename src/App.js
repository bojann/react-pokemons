import React, { Component } from "react";
import { Router as ReachRouter } from "@reach/router";
import Loadable from "react-loadable";

import BlizzardHome from "components/blizzardapi/BlizzardHome";
import LoadingSpinner from "components/shared/widgets/LoadingSpinner";
import Dashboard from "components/Dashboard";
import Login from "components/user/Login";
import { LoginContextProvider } from "components/user/LoginContext";

import "App.scss";

const LoadablePokeHome = Loadable({
  loader: () => import("components/pokeapi/pokedashboard/PokeHome"),
  loading: () => <LoadingSpinner />
});
const LoadablePokeDetail = Loadable({
  loader: () => import("components/pokeapi/pokedetails/PokeDetail"),
  loading: () => <LoadingSpinner />
});

class App extends Component {
  render() {
    return (
      <LoginContextProvider>
        <ReachRouter>
          <Dashboard path="/">
            <LoadablePokeHome path="pokemons" />
            <LoadablePokeDetail path="pokemon/:id" />
            <BlizzardHome path="blizzard" />
          </Dashboard>
          <Login path="login" />
        </ReachRouter>
      </LoginContextProvider>
    );
  }
}

export default App;
