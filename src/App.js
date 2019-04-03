import React, { Component } from "react";
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

class App extends Component {
  componentDidMount = () => {
    this.props.onFetchAllProducts();
    this.props.onProfileDetail(this.props.user.id);
  };
  render() {
    let products = [];
    if (this.props.products) {
      products = this.props.products;
      return (
        <div>
          {/* <ProductsList products={products} />
          <ProductDetail products={products} /> */}
          <Login />
          <Logout />
          <Singup />
          {this.props.profile.user && (
            <Profile profile={this.props.profile.user} />
          )}
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
