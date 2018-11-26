import React, { PureComponent } from "react";
import { ListGroupItem } from "react-bootstrap";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

import AddItemButton from "components/pokeapi/pokebuttons/AddItemButton";
import RemoveItemButton from "components/pokeapi/pokebuttons/RemoveItemButton";

const LIMIT_LENGTH = 16;


class PokeItems extends PureComponent {
  trimName = name => {
    return name.substring(0, LIMIT_LENGTH - 3) + "...";
  };

  render() {
    const {
      selectMultiplePokemonFlag,
      handleClickAddPokemon,
      handleClickRemovePokemon,
      pokemons
    } = this.props;

    return (
      pokemons.map(pokemon => {
        return selectMultiplePokemonFlag ? (
          <ListGroupItem key={pokemon.url}>
            <span className="list-group-item__poke-item">
              {pokemon.name.length > LIMIT_LENGTH
                ? this.trimName(pokemon.name)
                : pokemon.name}
            </span>
              <AddItemButton
                handleClickAddPokemon={handleClickAddPokemon}
                selectMultiplePokemonFlag={selectMultiplePokemonFlag}
                data-idname={pokemon.name}
              />
              <RemoveItemButton 
                data-idname={pokemon.name}
                handleClickRemovePokemon={handleClickRemovePokemon}
              />
          </ListGroupItem>
        ) : (
          <Link
            to={`/pokemon/${pokemon.name}`}
            data-idname={pokemon.name}
            key={pokemon.url}
          >
            <ListGroupItem>
              <span className="list-group-item__poke-item">
                {pokemon.name.length > LIMIT_LENGTH
                  ? this.trimName(pokemon.name)
                  : pokemon.name}
              </span>
            </ListGroupItem>
          </Link>
        )
      })
    )
  }
}

PokeItems.propTypes = {
  handleClickAddPokemon: PropTypes.func,
  handleClickRemovePokemon: PropTypes.func,
  selectMultiplePokemonFlag: PropTypes.bool,
  pokemons: PropTypes.array,
};

export default PokeItems;
