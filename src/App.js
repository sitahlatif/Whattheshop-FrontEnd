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

// import ProfileUpdate from "./components/ProfileUpdate";
import Cart from "./components/Cart";

class App extends Component {
  componentDidMount = async () => {
    this.props.onFetchAllProducts();
    await this.props.onProfileDetail();
    this.props.onfetchCartList();
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
            <Route
              path="/profile"
              render={props => (
                <Profile {...props} profile={this.props.profile} />
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
