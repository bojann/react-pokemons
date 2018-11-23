import React, { Component } from "react";
import { Link } from "@reach/router";

import withAuth from "components/contexts/user/withAuth";
import CustomButton from "components/shared/buttons/CustomButton";

import "./Navigation.scss";

class Navigation extends Component {
  render() {
    const { isUserLogged, handleSignOut } = this.props;

    return (
      <nav className="navigation">
        <Link to="pokemons">Pokemons</Link>
        <Link to="blizzard">World of Warcraft</Link>
        <Link to="login">
          <CustomButton
            bsStyle="warning"
            onClick={handleSignOut}
            isVisible={true}
            isDisabled={false}
          >
            {isUserLogged ? "Sign Out" : "Login"}
          </CustomButton>
        </Link>
      </nav>
    );
  }
}

export default withAuth(Navigation);
