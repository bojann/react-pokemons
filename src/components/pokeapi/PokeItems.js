import React from "react";
import { ListGroupItem } from "react-bootstrap/lib/";
import { Link } from "@reach/router";

const LIMIT_LENGTH = 16;

export default class PokeItems extends React.PureComponent {
  trimName = name => {
    return name.substring(0, LIMIT_LENGTH - 3) + "...";
  };

  renderPokeList = () => {
    return this.props.pokemons.map(pokemon => {
      return (
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
  };

  render() {
    return this.renderPokeList();
  }
}
