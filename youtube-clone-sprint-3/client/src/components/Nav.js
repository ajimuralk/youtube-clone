import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <Link to="/">
          <img className="Nav__logo" src={this.props.logo} alt="logo" />
        </Link>
        <div className="Navlinks">
          <input type="text" className="Nav__search" placeholder="Search" />
          <Link className="Nav__button" to="/upload">
            UPLOAD
          </Link>

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
