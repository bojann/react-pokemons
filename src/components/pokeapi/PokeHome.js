import React, { Component } from 'react'

import { fetchPokemons } from "services/fetchData";
import { ListGroup } from "react-bootstrap/lib/";
import PokeItems from "components/pokeapi/PokeItems";
import { POKEMON_API } from "components/enums";

export default class PokeHome extends Component {
  state = {
    pokeResponse: [],
    active: 0,
    limit: 20,
    offset: 10,
    count: 0
  }
  
  componentDidMount() {
    fetchPokemons(POKEMON_API.POKEMONS_PATH)
      .then( pokemons => {
        this.setState({
          pokeResponse: pokemons.results,
          count: pokemons.count
        })
      })
  }

  render() {
    return(
      <div>
        <ul>
          <PokeItems pokemons={this.state.pokeResponse} />
        </ul>
      </div>
    )
  }
}
