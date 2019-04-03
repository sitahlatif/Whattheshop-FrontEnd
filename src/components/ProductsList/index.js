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
function mapStateToProps(state) {
  return {
    // products: state.productsRoot.products
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
