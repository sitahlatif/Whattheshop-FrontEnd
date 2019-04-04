import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import ProductListItem from "./ProductListItem";

class ProductsList extends Component {
  render() {
    const productsList = this.props.products.map(product => (
      <ProductListItem key={product.id} product={product} />
    ));
    return <ul>{productsList}</ul>;
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default ProductsList;
