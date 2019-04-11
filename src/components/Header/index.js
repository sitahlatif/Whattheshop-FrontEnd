import React, { Component } from "react";
import logo from "../../looogoo.gif";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

class index extends Component {
  render() {
    let itemQuantity = 0;
    this.props.order.cart_items.forEach(
      item => (itemQuantity += item.quantity)
    );
    return (
      <div>
        <header className="header-section">
          <div className="header-top">
            <div className="container">
              <div className="row col-xl-12 col-lg-12">
                <div className="col-xl-9 col-lg-9  ">
                  <SearchBar history={this.props.history} />
                </div>

                <div className="col-xl-3 col-lg-3  float-right">
                  <div className="user-panel">
                    {this.props.user ? (
                      <div>
                        <div className="up-item ml-3">
                          <i class="fas fa-user-circle" />
                          <Link to="/profile">Profile</Link>
                        </div>

                        <div className="up-item ml-3">
                          <i class="fas fa-sign-out-alt" />
                          <Link onClick={() => this.props.logout()} to="/">
                            Log Out {this.props.user.username}
                          </Link>
                        </div>
                        <div className="up-item">
                          <div className="shopping-card">
                            <i className="flaticon-bag" />
                            <span>{itemQuantity}</span>
                          </div>
                          <Link to="/cart">Shopping Cart</Link>
                        </div>
                      </div>
                    ) : (
                      <div className="up-item ml-3">
                        <i
                          class="fas fa-sign-in-alt"
                          style={{ color: "gray", marginLeft: 5 }}
                        />
                        <Link to="/login">Sign In</Link>
                        <div className="up-item ml-3">
                          <i
                            class="fas fa-user-plus"
                            style={{ color: "gray", marginLeft: 5 }}
                          />
                          <Link to="/signup">Sign up</Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* */}
          <div
            style={{
              backgroundImage: "url(img/simple2.gif)",

              backgroundRepeat: "no-repeat",
              height: "450px"
            }}
            className="text-center col-12"
          >
            {/* <img src={logo} alt=""  /> */}
          </div>

          <nav className="main-navbar col-12 col-sm-12">
            <div className="container">
              <ul className="main-menu text-secondary">
                <li className="text-secondary">
                  <FontAwesomeIcon icon={faHome} className="text-secondary" />
                  <Link to="/"> Home</Link>
                </li>
                <li>
                  <a href="#">Gifts</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Clay Art</a>
                </li>

                <li>
                  <a href="#">Cards</a>
                </li>
                <li>
                  <a href="#">Sewing</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.authRoot.user,
    order: state.cartRoot.order
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actionCreators.logout())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
