import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

// Components
import ProductsList from "./components/ProductsList";
import ProductDetail from "./components/ProductDetail";

function mapStateToProps(state) {
  return {
    products: state.productsRoot.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchAllProducts: () => dispatch(actionCreators.fetchAllProducts())
  };
}

class App extends Component {
  componentDidMount = () => {
    this.props.onFetchAllProducts();
  };
  render() {
    let products = [];
    if (this.props.products) {
      products = this.props.products;
      return (
        <div>
          <ProductsList products={products} />
          <ProductDetail products={products} />
        </div>
      );
    }
    return <div />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
