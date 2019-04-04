import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/profileAction";

class Profile extends Component {
  render() {
    return (
      <div>
        <li>Username: {this.props.profile.user.username}</li>
        <li>First Name: {this.props.profile.user.first_name}</li>

        <li>Address: {this.props.profile.address}</li>

      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    // profile: state.profileRoot.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    profileDetail: userID => dispatch(actionCreators.profileDetail(userID))
  };
};
export default Profile;
