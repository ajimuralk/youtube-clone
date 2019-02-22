import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <img className="Nav__logo" src={this.props.logo} alt="logo" />
        <div className="Navlinks">
          <input type="text" className="Nav__search" placeholder="Search" />
          <Button className="Nav__button" variant="contained">
            UPLOAD
          </Button>
          <img
            className="Nav__profile"
            src={this.props.profilePicture}
            alt="profilePicture"
          />
        </div>
      </nav>
    );
  }
}

export default Nav;
