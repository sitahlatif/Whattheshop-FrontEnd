import * as actionCreators from "../../../store/actions";
import { connect } from "react-redux";
import React, { Component } from "react";

class Logout extends Component {
  render() {
    return (
      <button className="btn btn-danger" onClick={() => this.props.logout()}>
        Logout {this.props.user && this.props.user.username}
      </button>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});
const mapStateToProps = state => ({
  user: state.authRoot.user
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
