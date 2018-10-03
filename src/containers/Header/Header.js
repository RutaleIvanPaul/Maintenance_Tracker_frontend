import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../../css/style.css";

class Header extends Component {
  state = {};
  Logout = () =>{
    localStorage.removeItem("token");
  }
  render() {
    return (
      <div className="menu">
        <div className="navbar-homepage">
        {localStorage.getItem("type") === "admin" ?  <NavLink className="dropdown-item" to="/AdminViewRequests">
          User Requests
          </NavLink> : null}
          <NavLink className="dropdown-item" to="/ViewRequests">
            My Requests
          </NavLink>
          <NavLink className="dropdown-item" to="/CreateRequest">
            New Request
          </NavLink>

          <span className="logoutSpan">
            <button id="logoutButton">
              <NavLink className="dropdown-item" to="/" onClick={this.Logout}>
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
