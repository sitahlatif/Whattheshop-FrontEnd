import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/profileAction";

class ProfileUpdate extends Component {
  state = {
    address: this.props.profile.address,
    username: this.props.user.username,
    first_name: this.props.user.first_name,
    last_name: this.props.user.last_name,
    email: this.props.user.email
  };

  handleSubmit = event => {
    event.preventDefault();
    // if (this.props.profile) {
    console.log(this.state.user, "user state");
    console.log(this.state.profile, "profile state");
    this.props.profileUpdate(
      {
        username: this.state.username,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email
      },
      { address: this.state.address }
    );
    //
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              id="txtFullname"
              className="form-control"
              value={this.state.username}
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              id="txtFullname"
              className="form-control"
              value={this.state.first_name}
              name="first_name"
              placeholder="First Name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              id="txtFullname"
              className="form-control"
              value={this.state.last_name}
              name="last_name"
              placeholder="Last name"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label for="txtEmail">Email:</label>
            <input
              type="text"
              id="txtEmail"
              className="form-control"
              value={this.state.email}
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              value={this.state.address}
              name="address"
              placeholder="address"
              id="txtPhone"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            data-dismiss="modal"
          >
            Update Profile
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    profile: state.profileRoot.profile,
    loading: state.profileRoot.loading,
    user: state.authRoot.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    profileDetail: userID => dispatch(actionCreators.profile(userID)),
    profileUpdate: (userDate, profileDate) =>
      dispatch(actionCreators.profileUpdate(userDate, profileDate))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileUpdate);
