import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/profileAction";

class ProfileUpdate extends Component {
  state = {
    address: this.props.profile.address,
    image: this.props.profile.image
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.profile) {
      console.log("this is the user");
      console.log(this.props.profile);
      this.props.profileUpdate(this.props.profile.id);
    }
  };
  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={this.state.address}
              name="address"
              placeholder="address"
              onChange={this.handleChange}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="password">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              name="address"
              placeholder="address"
              onChange={this.handleChange}
            />
          </div> */}

          <button type="submit" className="btn btn-primary">
            Update Profile
          </button>
        </form>
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     profile: state.profileRoot.profile,
//     user: state.authRoot.user
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    profileUpdate: userID => dispatch(actionCreators.profileUpdate(userID))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(ProfileUpdate);
