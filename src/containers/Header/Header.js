import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { LOGIN_FAIL } from "../../store/actions/actionTypes";
import "../../css/style.css";

class Header extends Component {
  state = {};
  Logout = () => {
    const { LoginOut } = this.props;
    localStorage.removeItem("token");
    LoginOut();
  };
  render() {
    return (
      <div className="menu">
        <div className="navbar-homepage row">
          {localStorage.getItem("type") === "admin" ? (
            <NavLink className="dropdown-item" to="/AdminViewRequests">
              User Requests
            </NavLink>
          ) : null}
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

const mapDispatchToProps = dispatch => {
  return {
    LoginOut: () => dispatch({ type: LOGIN_FAIL })
  };
};

export default connect(mapDispatchToProps)(Header);
