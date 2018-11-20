import React, { Component } from "react";
import Navigation from "components/shared/navigation/Navigation";

import "./Dashboard.scss";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <Navigation />
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default Dashboard;
