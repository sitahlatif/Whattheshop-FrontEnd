import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/profileAction";

class Profile extends Component {
  componentDidMount = () => {
    if (this.props.profile)
      console.log("this is from the profile page", this.props.profile);
  };
  render() {
    console.log("hi");
    return (
      <div>
        {this.props.profile.user && (
          <div>
            <li>Username: {this.props.profile.user.username}</li>
            <li>First Name: {this.props.profile.user.first_name}</li>

            <li>Address: {this.props.profile.address}</li>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    // profil: state.profileRoot.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    profileDetail: userID => dispatch(actionCreators.profile(userID))
  };
};
export default Profile;
