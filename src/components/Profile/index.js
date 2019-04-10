import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/profileAction";
import OrderHistory from "../OrderHistory";
import Loading from "../Loading";
import ProfileUpdate from "../ProfileUpdate";
class Profile extends Component {
  state = {
    profile: {
      address: this.props.profile.address
    },
    user: {
      username: this.props.user.username,
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      email: this.props.user.email
    }
  };

  componentDidMount = () => {
    if (this.props.profile) this.props.profileDetail();
  };
  handleSubmit = event => {
    event.preventDefault();
    // if (this.props.profile) {
    console.log("jwewe");
    this.props.profileUpdate(this.state.user, this.state.profile);
    //
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    // console.log(this.props.profile, "profile");
    // {
    /* <div>
            <li>Username: {this.props.profile.user.username}</li>
            <li>First Name: {this.props.profile.user.first_name}</li>

            <li>Address: {this.props.profile.address}</li>
          </div> */
    // }
    // if (this.props.loading) {
    //   return <Loading />;
    // } else {
    //   console.log("hi");
    return (
      <div>
        {this.props.profile.user && (
          <div>
            <div className="main">
              <div className="col-md-12 col-md-12-sm-12 col-xs-12 user-image text-center">
                <img
                  src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
                  className="rounded-circle"
                />
              </div>
              <h3
                style={{ fontFamily: "monospace" }}
                className="mb-4 text-center"
              >
                HELLO {this.props.profile.user.username}..!
              </h3>
              <input id="radio1" type="radio" name="css-tabs" checked />
              <input id="radio2" type="radio" name="css-tabs" />
              <input id="radio3" type="radio" name="css-tabs" />
              <input id="radio4" type="radio" name="css-tabs" />
              <div id="tabs">
                <label id="tab1" for="radio1">
                  Information
                </label>
                <label id="tab2" for="radio2">
                  My Order
                </label>
                <label id="tab3" for="radio3">
                  Locations
                </label>
                <label id="tab4" for="radio4">
                  Settings
                </label>
              </div>
              <div id="content">
                <section id="content1">
                  <h3>Welcome {this.props.profile.user.username} ! </h3>
                  <hr />
                  <p className="mt-3">
                    Welcome to your account dashboard. Get an overview of your
                    recent account activity and update your account information.
                    Select a tab above to view or edit your details.
                  </p>
                  <ul>
                    <div
                      role="tabpanel"
                      className="tab-pane fade show active"
                      id="profile"
                    >
                      {/* <div className="row bg-light">
                        <div className="col-md-2">
                          <label>ID</label>
                        </div>
                        <div className="col-md-6">
                          <p>{this.props.profile.id}</p>
                        </div>
                      </div> */}
                      <hr />
                      <div className="row bg-light mt-4 rounded-pill">
                        <div className="col-md-2">
                          <label>FirstName:</label>
                        </div>
                        <div className="col-md-6">
                          <p>{this.props.profile.user.first_name}</p>
                        </div>
                      </div>
                      <div className="row bg-light mt-4 rounded-pill">
                        <div className="col-md-2">
                          <label>LastName:</label>
                        </div>
                        <div className="col-md-6 ">
                          <p>{this.props.profile.user.last_name}</p>
                        </div>
                      </div>
                      <div className="row bg-light mt-4 rounded-pill">
                        <div className="col-md-2">
                          <label>Email:</label>
                        </div>
                        <div className="col-md-6">
                          <p>{this.props.profile.user.email}</p>
                        </div>
                      </div>
                      <div className="row bg-light mt-4 rounded-pill">
                        <div className="col-md-2">
                          <label>Address:</label>
                        </div>
                        <div className="col-md-6">
                          <p>{this.props.profile.address}</p>
                        </div>
                      </div>
                    </div>
                  </ul>
                </section>
                <section id="content2">
                  <h3>
                    Order History:{" "}
                    <span
                      className="text-light"
                      style={{ fontFamily: "fantcy" }}
                    >
                      {" "}
                      # {this.props.profile.user.orders.length} orders
                    </span>
                  </h3>

                  <OrderHistory />
                </section>
                <section id="content3">
                  <h3>Interesting Heading Text</h3>
                  <p>
                    Fusce pulvinar porttitor dui, eget ultrices nulla tincidunt
                    vel. Suspendisse faucibus lacinia tellus, et viverra ligula.
                    Suspendisse eget ipsum auctor, congue metus vel, dictum
                    erat. Aenean tristique euismod molestie. Nulla rutrum
                    accumsan nisl, ac semper sapien tincidunt et. Praesent
                    tortor risus, commodo et sagittis nec, aliquam quis augue.
                    Aenean non elit elementum, tempor metus at, aliquam felis.
                  </p>
                </section>
                <section id="content4" className="m-5 ">
                  <h3>Edit Your Profile Information:</h3>
                  <ProfileUpdate />
                </section>
              </div>
              <footer>
                An original pen by <a href="https://codepen.io/ejsado/">Eric</a>
                .
              </footer>
            </div>
            {/* 
            <div>
              <div className="container main-secction">
                <div className="row">
               
                  <div className="row user-left-part">
                    <div className="col-md-3 col-sm-3 col-xs-12 user-profil-part pull-left">
                      <div className="row ">
                        <div className="col-md-12 col-md-12-sm-12 col-xs-12 user-image text-center">
                          <img
                            src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png/"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12 user-detail-section1 text-center">
                          <button
                            id="btn-contact"
                            data-toggle="modal"
                            data-target="#contact"
                            className="btn btn-success btn-block follow"
                          >
                            Edit profile
                          </button>
                        </div>
                        <div className="row user-detail-row">
                          <div className="col-md-12 col-sm-12 user-detail-section2 pull-left">
                            <div className="border" />
                            <p>FOLLOWER</p>
                            <span>320</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-12 pull-right profile-right-section">
                      <div className="row profile-right-section-row">
                        <div className="col-md-12 profile-header">
                          <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-6 profile-header-section1 pull-left">
                              <h3>Hello, {this.props.profile.user.username}</h3>
                              <h5>Developer</h5>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-6 profile-header-section1 text-right pull-rigth" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-md-8">
                              <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                  <a
                                    className="nav-link active"
                                    href="#profile"
                                    role="tab"
                                    data-toggle="tab"
                                  >
                                    <i className="fas fa-user-circle" /> My
                                    Dashboard
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    href="#buzz"
                                    role="tab"
                                    data-toggle="tab"
                                  >
                                    <i className="fas fa-info-circle" /> My
                                    orders
                                  </a>
                                </li>
                              </ul>

                              <div className="tab-content">
                                <div
                                  role="tabpanel"
                                  className="tab-pane fade"
                                  id="buzz"
                                >
                                  <div className="row">
                                    <div className="col-md-6">
                                      <label>Order ID:</label>
                                    </div>
                                    <div className="col-md-6">
                                      <p />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <h5 className="modal-title" id="contact">
                  Update Profile
                </h5>
              </div>

              <div
                className="modal fade"
                id="contact"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="">
                      <h5 className="modal-title" id="contact">
                        Update Profile
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <label>Username:</label>
                          <input
                            type="text"
                            id="txtFullname"
                            className="form-control"
                            value={this.state.user.username}
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
                            value={this.state.user.first_name}
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
                            value={this.state.user.last_name}
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
                            value={this.state.user.email}
                            name="email"
                            placeholder="Email"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Address:</label>
                          <input
                            type="text"
                            value={this.state.profile.address}
                            name="address"
                            placeholder="address"
                            id="txtPhone"
                            className="form-control"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Cancelar
                          </button>
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
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        )}
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
)(Profile);
