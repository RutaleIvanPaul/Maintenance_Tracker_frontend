import React, { Component } from "react";
import axios from 'axios';
import "../../css/style.css";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup_class: "show",
      signup_tab: "tab active",
      login_class: "remove",
      login_tab: "tab"
    };
  }

  switchDisplay = event => {
    if (event.target.name === "signup") {
      this.setState({
        signup_class: "show",
        login_class: "remove",
        login_tab: "tab",
        signup_tab: "tab active"
      });
    }
    if (event.target.name === "login") {
      this.setState({
        signup_class: "remove",
        login_class: "show",
        signup_tab: "tab",
        login_tab: "tab active"
      });
    }
  };

  eventListener = event => this.setState({ [event.target.name]: event.target.value });

  submitSignup = (e) => {
	e.preventDefault();
	const {email,password} =this.state;
	const usertype = "user";
    const data = {
	  email,
	  password,
	  usertype
    };
    axios({
		url: "https://kla08-maintenance-tracker.herokuapp.com/api/v1/auth/signup",
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		data: data
	  })
	  .then((response) => {
        console.log(response);
      });
  };

  submitLogin = (e) => {
	e.preventDefault();
	const {email,password} =this.state;
	const { history } = this.props;
    const { push } = history;
    const data = {
	  email,
	  password
    };
    axios({
		url: "https://kla08-maintenance-tracker.herokuapp.com/api/v1/auth/login",
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		data: data
	  })
	  .then((response) => {
		console.log(response.data.token);
		if(response.data.token){
      localStorage.setItem('token', response.data.token);
      push(`/`);
		}
		else{
			push(`/`);
		}
      });
  };

  render() {
    const { signup_class, login_class, login_tab, signup_tab } = this.state;
    return (
      <div className="form">
        <ul className="tab-group">
          <li className={signup_tab} id="signup-tab">
            <a href="#signup" name="signup" onClick={this.switchDisplay}>
              Sign Up
            </a>
          </li>
          <li className={login_tab} id="login-tab">
            <a href="#login" name="login" onClick={this.switchDisplay}>
              Log In
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className={signup_class}>
            <form onSubmit={this.submitSignup}>
              <h1>Sign Up Here</h1>

              <div className="field-wrap">
                <input
                  type="email"
                  placeholder="Email Address"
				  required
				  name="email"
				  onChange={this.eventListener}
                />
              </div>

              <div className="field-wrap">
                <input
                  type="password"
                  placeholder="Set A Password"
				  required
				  name="password"
				  onChange={this.eventListener}
                />
              </div>

              <button className="button button-block" type="submit">
                SUBMIT{" "}
              </button>
            </form>
          </div>

          <div className={login_class}>
            <form onSubmit={this.submitLogin}>
              <h1>Log in Here</h1>

              <div className="field-wrap">
                <input
                  type="email"
                  placeholder="Email Address"
                  required
				  onChange={this.eventListener}
				  name="email"
                />
              </div>

              <div className="field-wrap">
                <input
                  type="password"
                  placeholder="Password"
                  required
				  onChange={this.eventListener}
				  name="password"
                />
              </div>

              <p className="forgot">
                <a href="#forgotpassword">Forgot Password?</a>
              </p>

              <button type="submit" className="button button-block">
                SUBMIT{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Authentication;
