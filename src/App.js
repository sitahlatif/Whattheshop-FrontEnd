import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

// Components
import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Authentication/Login";
import Singup from "./components/Authentication/Signup";
import Logout from "./components/Authentication/Logout";
import Profile from "./components/Profile";
import Loading from "./components/Loading";

import ProfileUpdate from "./components/ProfileUpdate";
import Cart from "./components/Cart";
import HomePage from "./components/HomePage";
import Welcome from "react-welcome-page";
import Header from "./components/Header";
import Checkout from "./components/Checkout";

class App extends Component {
  componentDidMount = async () => {
    this.props.onFetchAllProducts();
    this.props.onFetchCategories();
    await this.props.onProfileDetail();
    await this.props.onfetchCartList();
  };

  render() {
    // if (this.props.loading) {
    //   return <Loading />;
    // } else {
    return (
      <div>
        <Welcome
          loopDuration={2100}
          data={[
            {
              backgroundColor: "white",
              textColor: "#EE79EA",
              imageAnimation: "flipInX",
              image: require("../src/800x600.gif")
            },
            {
              backgroundColor: "lightgray",
              text: "Made By Saudis",
              textColor: "lightgray",
              imageAnimation: "slideInUp",
              textAnimation: "slideInLeft",
              image: require("../src/saaudi.png")
            }
          ]}
        />
        <Header />

        <Switch>
          <Route path="/Home" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Singup} />
          <Route path="/logout" component={Logout} />
          <Route path="/checkout" component={Checkout} />
          <Route
            path="/profile"
            render={props => (
              <Profile {...props} profile={this.props.profile} />
            )}
          />
          <Route
            path="/updateprofile"
            render={props => (
              <ProfileUpdate {...props} profile={this.props.profile} />
            )}
          />

          <Route path="/products/:productID" component={ProductDetail} />

          <Route
            path="/products"
            render={props => (
              <ProductsList {...props} products={this.props.products} />
            )}
          />
          <Route path="/cart" component={Cart} />

          {/* <Route
              path="/Order"
              render={props => <Order {...props} order={this.props.profile} />}
            /> */}
        </Switch>

        {/* <Redirect to="/" /> */}
      </div>
    );
  }
}
// }

const mapStateToProps = state => {
  return {
    user: state.authRoot.user,
    products: state.productsRoot.filteredProducts,
    profile: state.profileRoot.profile,
    loading: state.profileRoot.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchAllProducts: () => dispatch(actionCreators.fetchAllProducts()),
    onFetchCategories: () => dispatch(actionCreators.fetchCategories()),
    onProfileDetail: () => dispatch(actionCreators.profile()),
    onfetchCartList: () => dispatch(actionCreators.fetchCartList())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
