import React, { Component } from "react";

import withSelectedPokemons from "components/contexts/pokemons/withSelectedPokemons";
import PokeDetail from "components/pokeapi/pokedetails/PokeDetail";

import "./PokeCompare.scss";

const storage = window.localStorage;

class PokeCompare extends Component {
  state = {
    selectedItems: []
  };

  componentDidMount() {
    let pokemons = [];
    const { selectedItems } = this.props;

    if (selectedItems && selectedItems.length) {
      pokemons = selectedItems;
    } else {
      pokemons = JSON.parse(storage.getItem("selectedPokemons"));
    }

    storage.setItem("selectedPokemons", JSON.stringify(pokemons));
    this.setState(() => {
      return {
        selectedItems: pokemons
      };
    });
  }

  renderPokeCompareList = () => {
    return this.state.selectedItems.map(pokemon => {
      return <PokeDetail key={pokemon} pokemon={pokemon} />;
    });
  };

  render() {
    return this.state.selectedItems.length ? (
      <div>{this.renderPokeCompareList()}</div>
    ) : null;
  }
}

export default withSelectedPokemons(PokeCompare);
