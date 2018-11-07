import React, { Component } from 'react'
import { Link } from "@reach/router"

import "./Navigation.scss"

export default class Navigation extends Component {
  
  render() {
    return(
      <nav className="navigation">
        <Link to="pokemons">Pokemons</Link>
        <Link to="blizzard">World of Warcraft</Link>
      </nav>
    )
  }
}
