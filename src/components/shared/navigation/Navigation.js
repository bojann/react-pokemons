import React, { Component } from "react";
import { Link } from "@reach/router";
import { Button } from "react-bootstrap";

import withAuth from "components/user/withAuth";

import "./Navigation.scss";

class Navigation extends Component {
  render() {
    const { isUserLogged, handleSignOut } = this.props;

    return (
      <nav className="navigation">
        <Link to="pokemons">Pokemons</Link>
        <Link to="blizzard">World of Warcraft</Link>
        <Link to="login">
          <Button bsStyle="warning" onClick={handleSignOut}>
            {isUserLogged ? "Sign Out" : "Login"}
          </Button>
        </Link>
      </nav>
    );
  }
}

export default withAuth(Navigation);
