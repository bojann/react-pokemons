import React, { Component } from "react";
import { navigate } from "@reach/router";

export const LoginContext = React.createContext({
  user: "",
  passw: "",
  isUserLogged: false,
  handleSubmitForm() {},
  handleChangeUser() {},
  handleChangePassw() {},
  validateForm() {}
});

export class LoginContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      passw: "",
      isUserLogged: false,
      handleSubmitForm: this.handleSubmitForm,
      handleChangeUser: this.handleChangeUser,
      handleChangePassw: this.handleChangePassw,
      validateForm: this.validateForm,
      handleSignOut: this.handleSignOut
    };
  }

  validateForm = () => {
    return this.state.user && this.state.passw;
  };

  handleSubmitForm = ev => {
    ev.preventDefault();
    this.setState(
      () => {
        return {
          isUserLogged: true
        };
      },
      () => {
        navigate("/pokemons");
      }
    );
  };

  handleChangeUser = text => {
    this.setState(() => {
      return {
        user: text
      };
    }, this.validateForm);
  };

  handleChangePassw = text => {
    this.setState(() => {
      return {
        passw: text
      };
    }, this.validateForm);
  };

  handleSignOut = () => {
    this.setState(
      () => {
        return {
          isUserLogged: false
        };
      },
      () => {
        navigate("/login");
      }
    );
  };

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}
