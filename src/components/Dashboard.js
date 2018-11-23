import React, { Component } from "react";
import { Redirect } from "@reach/router";

import Navigation from "components/shared/navigation/Navigation";
import withAuth from "components/contexts/user/withAuth";

import "./Dashboard.scss";

class Dashboard extends Component {
  render() {
    let { isUserLogged, children } = this.props;
    isUserLogged = true;

    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <Navigation />
        </header>
        {isUserLogged ? children : <Redirect to="login" noThrow />}
      </div>
    );
  }
}

export default withAuth(Dashboard);
