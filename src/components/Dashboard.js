import React, { Component } from 'react';
import { Router as ReachRouter } from "@reach/router"

import PokeHome from 'components/pokeapi/PokeHome'
import BlizzardHome from 'components/blizzardapi/BlizzardHome'
import Navigation from "components/shared/Navigation";

import './Dashboard.scss';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <Navigation/>
        </header>

        <ReachRouter>
          <PokeHome path="/pokemons" />
          <BlizzardHome path="/blizzard" />
        </ReachRouter>

      </div>
    );
  }
}

export default Dashboard;
