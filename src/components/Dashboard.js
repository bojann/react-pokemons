import React, { Component } from "react";
import { Router as ReachRouter } from "@reach/router";
import Loadable from 'react-loadable';

import BlizzardHome from "components/blizzardapi/BlizzardHome";
import Navigation from "components/shared/navigation/Navigation";
import LoadingSpinner from "components/shared/widgets/LoadingSpinner";
import Login from "components/user/Login";

import "./Dashboard.scss";

const LoadablePokeHome = Loadable({
  loader: () => import('components/pokeapi/PokeHome'),
  loading: () => <LoadingSpinner />
})
const LoadablePokeDetail = Loadable({
  loader: () => import('components/pokeapi/pokedetails/PokeDetail'),
  loading: () => <LoadingSpinner />
})


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <Navigation />
        </header>

        <ReachRouter>
          <LoadablePokeHome path="/pokemons" />
          <LoadablePokeDetail path="/pokemon/:id" />
          <BlizzardHome path="/blizzard" />
          <Login path="/login" />
        </ReachRouter>
      </div>
    );
  }
}

export default Dashboard;
