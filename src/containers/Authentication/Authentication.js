import React, { Component } from "react";
import { connect } from "react-redux";
import LoginUser from "../../store/actions/loginActions";
import SignupUser from "../../store/actions/signupActions";
import "../../css/style.css";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup_class: "show",
      signup_tab: "tab active",
      login_class: "remove",
      login_tab: "tab",
      message: "Sign Up Here"
    };
  }

  switchDisplay = event => {
    if (event.target.name === "signup") {
      this.setState({
        signup_class: "show",
        login_class: "remove",
        login_tab: "tab",
        signup_tab: "tab active",
        message: "Sign Up Here"
      });
    }
    if (event.target.name === "login") {
      this.setState({
        signup_class: "remove",
        login_class: "show",
        signup_tab: "tab",
        login_tab: "tab active",
        message: "Log in"
      });
    }
  };

  eventListener = event =>
    this.setState({ [event.target.name]: event.target.value });

  submitSignup = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const usertype = "user";
    const data = {
      email,
      password,
      usertype
    };
    const { Signup } = this.props;

    Signup(data);
  };

  submitLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { Login } = this.props;
    const data = {
      email,
      password
    };

    const { history } = this.props;
    const { push } = history;
    Login(data, push);
  };

  render() {
    const {
      signup_class,
      login_class,
      login_tab,
      signup_tab,
      message
    } = this.state;
    const { signup_message, login_message } = this.props;
    return (
      <div>
        <div className="form">
          <ul className="tab-group row">
            <li className={`${signup_tab} col-md-6`} id="signup-tab">
              <a href="#signup" name="signup" onClick={this.switchDisplay}>
                Sign Up
              </a>
            </li>
            <li className={`${login_tab} col-md-6`} id="login-tab">
              <a href="#login" name="login" onClick={this.switchDisplay}>
                Log In
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className={`${signup_class}`}>
              <form onSubmit={this.submitSignup}>
                <h1 className="row">{message}</h1>
                {signup_message ? (
                  <h1 className="row">{signup_message}</h1>
                ) : null}

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
                <h1>{message}</h1>
                {login_message ? (
                  <h1 className="row">{login_message}</h1>
                ) : null}
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authState: state.isAuth.isAuthentic,
    signup_message: state.signup.signup_message,
    login_message: state.isAuth.login_message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Login: (data, push) => dispatch(LoginUser(data, push)),
    Signup: data => dispatch(SignupUser(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authentication);
