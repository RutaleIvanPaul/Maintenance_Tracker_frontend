import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../css/style.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="menu">
        <div className="navbar-homepage">
          <a href="#">Home</a>
          <NavLink className="dropdown-item" to="/CreateRequest">
            New Request
          </NavLink>

          <span className="logoutSpan">
            <button id="logoutButton">
              <a href="#">Log Out</a>
            </button>
          </span>

          <a href="#" id="adminpage">
            Administrator Page
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
