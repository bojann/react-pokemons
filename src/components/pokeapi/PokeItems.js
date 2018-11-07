import React from 'react'

import { ListGroupItem } from "react-bootstrap/lib/";

export default class PokeItems extends React.Component {
  renderPokeList = () => {
    return this.props.pokemons.map( pokemon => {
      return (
        <li key={pokemon.url}>
          {pokemon.name}
        </li>
      )
    })
  }
  
  render() {
    console.log("%c  BA :********* ","background: orange;", this.props.pokemons);
    
    return this.renderPokeList()
  }
}