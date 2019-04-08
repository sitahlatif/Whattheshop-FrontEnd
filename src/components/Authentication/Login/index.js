import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  render() {
    const { username, password } = this.state;
    if (this.props.user) {
      // this.props.ProfileDetail();

      return <Redirect to="/profile" />;
    }
    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <h5 className="card-header grey darken-2 white-text text-center py-4">
            <strong style={{ fontFamily: "fantcy" }}>Sign in</strong>
          </h5>
          <div className="card-body px-lg-5 pt-0">
            <form
              className="text-center"
              style={{ color: "#757575" }}
              onSubmit={event => this.handleSubmit(event)}
            >
              <div className="md-form">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  classNameName="form-control"
                  id="materialRegisterFormFirstName"
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>

              <div className="md-form">
                <label for="materialLoginFormPassword">Password</label>

                <input
                  type="password"
                  classNameName="form-control"
                  id="materialSubscriptionFormPasswords"
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>

              <div className="d-flex justify-content-around">
                <div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="materialLoginFormRemember"
                    />
                    <label
                      className="form-check-label"
                      for="materialLoginFormRemember"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div>
                  <a href="">Forgot password?</a>
                </div>
              </div>

              <button
                className="btn btn-outline-dark btn-rounded btn-block my-4 waves-effect z-depth-0"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.authRoot.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (userData, history) =>
      dispatch(actionCreators.login(userData, history)),
    signup: (userData, history) =>
      dispatch(actionCreators.signup(userData, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
