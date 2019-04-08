import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/profileAction";
import OrderHistory from "../OrderHistory";
import Loading from "../Loading";
class Profile extends Component {
  componentDidMount = () => {
    if (this.props.profile)
      console.log("this is from the profile page", this.props.profile);
  };
  render() {
    {
      /* <div>
            <li>Username: {this.props.profile.user.username}</li>
            <li>First Name: {this.props.profile.user.first_name}</li>

            <li>Address: {this.props.profile.address}</li>
          </div> */
    }
    if (this.props.loading) {
      return <Loading />;
    } else {
      console.log("hi");
      return (
        <div>
          {this.props.profile.user && (
            <div>
              <div className="container main-secction">
                <div className="row">
                  {/* <div className="col-md-12 col-sm-12 col-xs-12 image-section">
                    <img src="https://png.pngtree.com/thumb_back/fw800/back_pic/00/08/57/41562ad4a92b16a.jpg" />
                  </div> */}
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
                              <h1>{this.props.profile.user.username}</h1>
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
                                  className="tab-pane fade show active"
                                  id="profile"
                                >
                                  <div className="row">
                                    <div className="col-md-2">
                                      <label>ID</label>
                                    </div>
                                    <div className="col-md-6">
                                      <p>{this.props.profile.id}</p>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-2">
                                      <label>FirstName:</label>
                                    </div>
                                    <div className="col-md-6">
                                      <p>
                                        {this.props.profile.user.first_name}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-2">
                                      <label>LastName:</label>
                                    </div>
                                    <div className="col-md-6">
                                      <p>{this.props.profile.user.last_name}</p>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-2">
                                      <label>Email:</label>
                                    </div>
                                    <div className="col-md-6">
                                      <p>{this.props.profile.user.email}</p>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-2">
                                      <label>Address:</label>
                                    </div>
                                    <div className="col-md-6">
                                      <p>{this.props.profile.address}</p>
                                    </div>
                                  </div>
                                </div>
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
                                  <OrderHistory />
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

              <div
                className="modal fade"
                id="contact"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="contact">
                        Contactarme
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
                      <div className="form-group">
                        <p for="msj">
                          Se enviará este mensaje a la persona que desea
                          contactar, indicando que te quieres comunicar con el.
                          Para esto debes de ingresar tu información personal.
                        </p>
                      </div>
                      <div className="form-group">
                        <label for="txtFullname">Nombre completo</label>
                        <input
                          type="text"
                          id="txtFullname"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label for="txtEmail">Email</label>
                        <input
                          type="text"
                          id="txtEmail"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label for="txtPhone">Teléfono</label>
                        <input
                          type="text"
                          id="txtPhone"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-dismiss="modal"
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    // profil: state.profileRoot.profile
    loading: state.profileRoot.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    profileDetail: userID => dispatch(actionCreators.profile(userID))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
