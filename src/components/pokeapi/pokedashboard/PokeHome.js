import React, { PureComponent } from "react";
import { debounce, filter } from "lodash";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
// import axios from "axios";
// import { navigate } from "@reach/router";

import { fetchPokeData } from "services/fetchData";
import PokeItems from "components/pokeapi/pokedashboard/PokeItems";
import { POKEMON_API } from "components/enums";
import SearchInput from "components/pokeapi/pokesearch/SearchInput";
import withAuth from "components/contexts/user/withAuth";
import PokeToolbar from "components/pokeapi/pokemanagement/PokeToolbar";
// import { POKE_MAX_ITEM_LIMIT } from "components/enums";
import withSelectedPokemons from "components/contexts/pokemons/withSelectedPokemons";

import "./PokeHome.scss";

class PokeHome extends PureComponent {
  state = {
    pokeResponse: [],
    filteredPokeResponse: [],
    active: 0,
    limit: 20,
    offset: 10,
    count: 0,
    pokeSearch: "",
    selectMultiplePokemonFlag: false
  };

  debounceEvent(...args) {
    this.debouncedEvent = debounce(...args);
    return e => {
      e.persist();
      return this.debouncedEvent(e);
    };
  }

  filterItems = this.debounceEvent(() => {
    const searchParam = this.state.pokeSearch;
    const filteredItems = filter(this.state.pokeResponse, pokeItem => {
      return pokeItem["name"].indexOf(searchParam) !== -1;
    });

    this.setState(() => {
      return { filteredPokeResponse: filteredItems };
    });
  }, 500);

  handleChangeCheckbox = () => {
    this.setState(currentState => {
      return {
        selectMultiplePokemonFlag: !currentState.selectMultiplePokemonFlag
      };
    });
  };

  getPokeData(selectedPoke) {
    fetchPokeData({
      path: POKEMON_API.POKEMONS_PATH,
      selectedPoke: selectedPoke
    }).then(pokemons => {
      this.setState(() => {
        return {
          pokeResponse: pokemons.results,
          filteredPokeResponse: pokemons.results,
          count: pokemons.count
        };
      });
    });
  }

  componentDidMount() {
    this.getPokeData();
  }

  componentWillUnmount() {
    this.debouncedEvent.cancel();
  }

  handleChangeSearch = e => {
    this.setState(
      {
        pokeSearch: e.target.value
      },
      () => this.filterItems(e)
    );
  };

  handleClickPokemon = (ev) => {
    const selectedPoke = ev.currentTarget.dataset.idname;
    this.getPokeData(selectedPoke);
  };

  render() {
    const {
      handleClickBtnCompare,
      handleClickAddPokemon,
      handleClickRemovePokemon,
      selectedItems
    } = this.props;

    return (
      <>
        <SearchInput
          pokeSearch={this.state.pokeSearch}
          handleChangeSearch={this.handleChangeSearch}
        />
        <PokeToolbar
          handleChangeCheckbox={this.handleChangeCheckbox}
          selectedItems={selectedItems}
          handleClickBtnCompare={handleClickBtnCompare}
          selectMultiplePokemonFlag={this.state.selectMultiplePokemonFlag}
        />
          <ListGroup>
            <PokeItems
              handleClickAddPokemon={handleClickAddPokemon}
              handleClickRemovePokemon={handleClickRemovePokemon}
              selectMultiplePokemonFlag={this.state.selectMultiplePokemonFlag}
              pokemons={this.state.filteredPokeResponse}
              handleClickPokemon={this.handleClickPokemon}
            />
          </ListGroup>
      </>
    );
  }
}

PokeHome.propTypes = {
  handleClickBtnCompare: PropTypes.func,
  handleClickAddPokemon: PropTypes.func,
  handleClickRemovePokemon: PropTypes.func,
};

export default withAuth(withSelectedPokemons(PokeHome));
