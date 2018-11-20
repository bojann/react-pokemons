import React, { PureComponent } from "react";
import { debounce, filter } from "lodash";

import { fetchPokeData } from "services/fetchData";
import { ListGroup } from "react-bootstrap/lib/";
import PokeItems from "components/pokeapi/pokedashboard/PokeItems";
import { POKEMON_API } from "components/enums";
import SearchInput from "components/pokeapi/pokesearch/SearchInput";
import withAuth from "components/user/withAuth";
import PokeToolbar from "components/pokeapi/pokemanagement/PokeToolbar";

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
    selectMultiplePokemonFlag: false,
    selectedItems: [],
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

  getItemStatus = () => {
    const selectedItems = this.state.selectedItems;
    
   return selectedItems.length ? selectedItems : []
  };

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

  handleClickPokemon = ev => {
    const selectedPoke = ev.currentTarget.dataset.idname;
    this.getPokeData(selectedPoke);
  };

  handleClickBtnCompare = (ev) => {
    
  };
  
  handleMultiSelectPoke = (_target) => {
    this.setState((currentState) => {
      return {
        selectedItems: [...currentState.selectedItems, _target.dataset.idname]
      }
    })
    
    console.log("%c  BA :********* ","background: orange;", this.state.selectedItems);
  }

  render() {
    return (
      <div>
        <SearchInput
          pokeSearch={this.state.pokeSearch}
          handleChangeSearch={this.handleChangeSearch}
        />
        <PokeToolbar
          handleChangeCheckbox={this.handleChangeCheckbox}
          selectedItems={this.state.selectedItems}
          handleClickBtnCompare={this.handleClickBtnCompare}
          selectMultiplePokemonFlag={this.state.selectMultiplePokemonFlag}
        />
        <ListGroup>
          <PokeItems
            handleMultiSelectPoke={(ev) => this.handleMultiSelectPoke(ev.target)}
            selectMultiplePokemonFlag={this.state.selectMultiplePokemonFlag}
            pokemons={this.state.filteredPokeResponse}
            handleClickPokemon={this.handleClickPokemon}
          />
        </ListGroup>
      </div>
    );
  }
}

export default withAuth(PokeHome);
