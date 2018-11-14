import React, { Component } from "react";
import { debounce, filter } from "lodash";

import { fetchPokeData } from "services/fetchData";
import { ListGroup } from "react-bootstrap/lib/";
import PokeItems from "components/pokeapi/PokeItems";
import { POKEMON_API } from "components/enums";
import SearchInput from "components/pokeapi/pokesearch/SearchInput";

import "./PokeHome.scss";

export default class PokeHome extends Component {
  state = {
    pokeResponse: [],
    filteredPokeResponse: [],
    active: 0,
    limit: 20,
    offset: 10,
    count: 0,
    pokeSearch: "",
  };

  debounceEvent(...args) {
    this.debouncedEvent = debounce(...args);
    return e => {
      e.persist()
      return this.debouncedEvent(e);
    };
  }

  filterItems = this.debounceEvent( () => {
    const searchParam = this.state.pokeSearch;
    const filteredItems =  filter(this.state.pokeResponse, (pokeItem) => {
      return (pokeItem['name'].indexOf(searchParam) !== -1)
    })

      this.setState(() => {
        return { filteredPokeResponse: filteredItems }
      })
  },
    500
  )

  getPokeData(selectedPoke) {
    fetchPokeData({
      path: POKEMON_API.POKEMONS_PATH,
      selectedPoke: selectedPoke
      
    }).then( pokemons => {
      this.setState(() => {
        return {
          pokeResponse: pokemons.results,
          filteredPokeResponse: pokemons.results,
          count: pokemons.count
        }
      });
    });
  }

  componentDidMount() {
    this.getPokeData();
  }

  componentWillUnmount() {
    this.debouncedEvent.cancel();
  }

  handleChangeSearch = (e) => {
    this.setState({
      pokeSearch: e.target.value
    }, () => this.filterItems(e)
    )
  };

  handleClickPokemon = (ev) => {
    console.log("%c  BA :********* ","background: orange;", ev.currentTarget.dataset.idname)
    const selectedPoke = ev.currentTarget.dataset.idname
    this.getPokeData(selectedPoke)
  }

  render() {
    return (
      <div>
        <SearchInput
          pokeSearch={this.state.pokeSearch}
          handleChangeSearch={this.handleChangeSearch}
        />
        <ListGroup>
          <PokeItems 
            pokemons={this.state.filteredPokeResponse} 
            handleClickPokemon={this.handleClickPokemon}
          />
        </ListGroup>
      </div>
    );
  }
}
