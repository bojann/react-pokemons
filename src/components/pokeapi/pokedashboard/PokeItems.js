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

  componedDidUpdate(s, p) {}

  renderPokeList = () => {};

  render() {
    const {
      selectMultiplePokemonFlag,
      handleMultiSelectPoke,
      pokemons
    } = this.props;

    return pokemons.map(pokemon => {
      return selectMultiplePokemonFlag ? (
        <ListGroupItem key={pokemon.url}>
          <span className="list-group-item__poke-item">
            {pokemon.name.length > LIMIT_LENGTH
              ? this.trimName(pokemon.name)
              : pokemon.name}
          </span>
          <AddItemButton
            handleMultiSelectPoke={handleMultiSelectPoke}
            selectMultiplePokemonFlag={selectMultiplePokemonFlag}
            data-idname={pokemon.name}
          />
          <RemoveItemButton data-idname={pokemon.name} />
        </ListGroupItem>
      ) : (
        <Link
          to={`/pokemon/${pokemon.name}`}
          key={pokemon.url}
          data-idname={pokemon.name}
        >
          <ListGroupItem>
            <span className="list-group-item__poke-item">
              {pokemon.name.length > LIMIT_LENGTH
                ? this.trimName(pokemon.name)
                : pokemon.name}
            </span>
          </ListGroupItem>
        </Link>
      );
    });
  }
}

PokeItems.propTypes = {
  handleMultiSelectPoke: PropTypes.func,
  selectMultiplePokemonFlag: PropTypes.bool,
  pokemons: PropTypes.array
};

export default PokeItems;
