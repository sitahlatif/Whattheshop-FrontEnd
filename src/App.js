import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// Components
import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Authentication/Login";
import Singup from "./components/Authentication/Signup";
import Logout from "./components/Authentication/Logout";
import Profile from "./components/Profile";

import Order from "./components/Order";

import ProfileUpdate from "./components/ProfileUpdate";

class App extends Component {
  componentDidMount = () => {
    this.props.onFetchAllProducts();
    if (this.props.user) {
      this.props.onProfileDetail(this.props.user.user_id);
    }
  };
  render() {
    let products = [];
    if (this.props.products) {
      products = this.props.products;
      return (
        <div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Singup} />
            <Route path="/logout" component={Logout} />
            {this.props.profile.user && (
              <Route
                path="/profile"
                render={props => (
                  <Profile {...props} profile={this.props.profile} />
                )}
              />
            )}

            <Route path="/products/:productID" component={ProductDetail} />

            <Route
              path="/products"
              render={props => (
                <ProductsList {...props} products={this.props.products} />
              )}
            />

            {/* <Route
              path="/Order"
              render={props => <Order {...props} order={this.props.profile} />}
            /> */}
          </Switch>
          
            {/* <Redirect to="/" /> */}
          </Switch>
        </div>
      );
    }
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.authRoot.user,
    products: state.productsRoot.products,
    profile: state.profileRoot.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchAllProducts: () => dispatch(actionCreators.fetchAllProducts()),
    onProfileDetail: userID => dispatch(actionCreators.profileDetail(userID))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
