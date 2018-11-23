import React, { Component } from "react";
// import axios from "axios";
import { navigate } from "@reach/router";

import { POKE_MAX_ITEM_LIMIT } from "components/enums";
// import {fetchPokeData} from "services/fetchData";

export const PokemonContext = React.createContext(null);

export class PokemonContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItems: [],
      handleMultiSelectPoke: this.handleMultiSelectPoke,
      handleClickBtnCompare: this.handleClickBtnCompare
    };
  }

  handleMultiSelectPoke = ev => {
    ev.persist();

    if (this.state.selectedItems.length > POKE_MAX_ITEM_LIMIT - 1) {
      return false;
    }

    this.setState(currentState => {
      return {
        selectedItems: [
          ...new Set([...currentState.selectedItems, ev.target.dataset.idname])
        ]
      };
    });
  };

  handleClickBtnCompare = () => {
    navigate("pokemon/compare");
    // const requestArr = this.state.selectedItems.map(selectedPoke => {
    //   return fetchPokeData({
    //     path: POKEMON_API.POKEMONS_PATH,
    //     selectedPoke: selectedPoke
    //   });
    // });
    //
    // axios
    //   .all(requestArr)
    //   .then(selectedPokeResponses => {
    //     const pokes = selectedPokeResponses.map(poke => {
    //       return poke;
    //     });
    //
    //     this.setState(
    //       () => {
    //         return {
    //           pokeCompareArray: pokes
    //         };
    //       },
    //       () => {
    //         navigate("pokemon/compare");
    //       }
    //     );
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };

  render() {
    return (
      <PokemonContext.Provider value={this.state}>
        {this.props.children}
      </PokemonContext.Provider>
    );
  }
}
