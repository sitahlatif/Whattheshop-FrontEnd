import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as actionCreators from "./store/actions/index";
import { connect } from "react-redux";
import { dispatch } from "rxjs/internal/observable/range";

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
    this.props.signup(this.state);
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={this.state.username}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={this.state.emailemail}
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={this.state.password}
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Signup
              </button>
              {/* <Link to="/login" className="btn btn-link my-2 my-sm-0">
                I already have an account
              </Link> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: userData => dispatch(actionCreators.signup(userData))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Signup);
