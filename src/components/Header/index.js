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
                      <div className="up-item ml-3">
                        <i className="flaticon-profile" />
                        <Link onClick={() => this.props.logout()} to="/home">
                          Log Out
                        </Link>

                        <div className="up-item">
                          <div className="shopping-card">
                            <i className="flaticon-bag" />
                            <span>0</span>
                          </div>
                          <a href="#">Shopping Cart</a>
                        </div>
                      </div>
                    ) : (
                      <div className="up-item ml-3">
                        <i className="flaticon-profile" />
                        <Link to="/login">Sign In</Link>
                        <div className="up-item ml-3">
                          <i className="flaticon-profile" />
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
                  <Link to="/home"> Home</Link>
                </li>
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">
                    Jewelry
                    <span className="new">New</span>
                  </a>
                </li>
                <li>
                  <a href="#">Shoes</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">Sneakers</a>
                    </li>
                    <li>
                      <a href="#">Sandals</a>
                    </li>
                    <li>
                      <a href="#">Formal Shoes</a>
                    </li>
                    <li>
                      <a href="#">Boots</a>
                    </li>
                    <li>
                      <a href="#">Flip Flops</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="./product.html">Product Page</a>
                    </li>
                    <li>
                      <a href="./category.html">Category Page</a>
                    </li>
                    <li>
                      <a href="./cart.html">Cart Page</a>
                    </li>
                    <li>
                      <a href="./checkout.html">Checkout Page</a>
                    </li>
                    <li>
                      <a href="./contact.html">Contact Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Blog</a>
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
    user: state.authRoot.user
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
