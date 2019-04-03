import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/profileAction";

class Profile extends Component {
  render() {
    return (
      <div>
        <li>{this.props.profile.user.username}</li>;
        <li>{this.props.profile.address}</li>;
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
