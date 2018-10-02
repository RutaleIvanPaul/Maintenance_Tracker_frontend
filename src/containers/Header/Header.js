import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../css/style.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="menu">
        <div className="navbar-homepage">
          <NavLink className="dropdown-item" to="/ViewRequests">
            Home
          </NavLink>
          <NavLink className="dropdown-item" to="/CreateRequest">
            New Request
          </NavLink>

          <span className="logoutSpan">
            <button id="logoutButton">
              <NavLink className="dropdown-item" to="/">
                Log Out
              </NavLink>
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
