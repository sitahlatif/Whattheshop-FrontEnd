import React, { Component } from "react";
import { connect } from "react-redux";
import actionCreators from "../../store/actions/profileAction";

class Profile extends Component {
  render() {
    return (
      <div className="col-md-5">
        <div className="form-area">
          <form role="form">
            <br styles="clear:both" />
            <div className="form-group">
              <input
                value={this.state.name}
                type="text"
                onChange={this.handleNameChange}
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                value={this.state.password}
                type="password"
                onChange={this.handlePasswordChange}
                className="form-control"
                placeholder="Password"
                required
              />
            </div>

            <button
              type="button"
              onClick={this.updateProfile}
              id="submit"
              name="submit"
              className="btn btn-primary pull-right"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    profile: state.profileReducer.profile
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
