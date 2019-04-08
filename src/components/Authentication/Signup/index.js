import React, { Component } from "react";
// import { Link } from "react-router-dom";
import * as actionCreators from "../../../store/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state, this.props.history);
  };

  render() {
    if (this.props.user) return <Redirect to="/profile" />;
    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <h5 className="card-header grey darken-2 white-text text-center py-4">
            <strong style={{ fontFamily: "fantcy" }}>Sign up</strong>
          </h5>
          {/*  */}

          <div className="card-body px-lg-5 pt-0">
            <form
              className="m-5"
              style={{ color: "#757575" }}
              onSubmit={this.handleSubmit}
            >
              <div className="md-form mt-0">
                <input
                  type="text"
                  classNameName="form-control"
                  id="materialRegisterFormFirstName"
                  value={this.state.username}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="md-form">
                <input
                  type="password"
                  classNameName="form-control"
                  id="materialSubscriptionFormPasswords"
                  value={this.state.password}
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <div className="md-form">
                  <input
                    type="email"
                    className="form-control"
                    id="materialLoginFormEmail"
                    value={this.state.email}
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <button
                className="btn btn-outline-dark btn-rounded btn-block my-4 waves-effect z-depth-0"
                type="submit"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: (userData, history) =>
      dispatch(actionCreators.signup(userData, history))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Signup);
