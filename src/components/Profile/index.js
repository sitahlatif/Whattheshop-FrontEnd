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
    if (!this.props.profile) this.props.profileDetail();
  };

  render() {
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
    profileDetail: () => dispatch(actionCreators.profile()),

    profileUpdate: (userDate, profileDate) =>
      dispatch(actionCreators.profileUpdate(userDate, profileDate))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
