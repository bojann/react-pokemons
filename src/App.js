import React, { Component } from "react";
import { Router as ReachRouter } from "@reach/router";
import Loadable from "react-loadable";

import BlizzardHome from "components/blizzardapi/BlizzardHome";
import LoadingSpinner from "components/shared/widgets/LoadingSpinner";
import Dashboard from "components/Dashboard";
import Login from "components/user/Login";
import { LoginContextProvider } from "components/contexts/user/LoginContext";
import { PokemonContextProvider } from "components/contexts/pokemons/PokemonContext";
import NoMatchPage from "components/NoMatchPage";

import "App.scss";

const LoadablePokeHome = Loadable({
  loader: () => import("components/pokeapi/pokedashboard/PokeHome"),
  loading: () => <LoadingSpinner />
});
const LoadablePokeDetail = Loadable({
  loader: () => import("components/pokeapi/pokedetails/PokeDetail"),
  loading: () => <LoadingSpinner />
});
const LoadablePokeCompare = Loadable({
  loader: () => import("components/pokeapi/pokecompare/PokeCompare"),
  loading: () => <LoadingSpinner />
});

class App extends Component {
  render() {
    return (
        <LoginContextProvider>
          <PokemonContextProvider>
              <ReachRouter>
                <Dashboard path="/">
                  <LoadablePokeHome path="pokemons" />
                  <LoadablePokeDetail path="pokemon/:id" />
                  <LoadablePokeCompare path="pokemon/compare" />
                  <BlizzardHome path="blizzard" />
                  <NoMatchPage default />
                </Dashboard>
                <Login path="login" />
              </ReachRouter>
          </PokemonContextProvider>
        </LoginContextProvider>
    );
  }
}

export default App;
