import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import ProductListItem from "./ProductListItem";
import * as actionCreators from "../../store/actions";

class ProductsList extends Component {
  componentDidMount = async () => {
    this.props.onFetchAllProducts();
    await this.props.onProfileDetail();
    // this.props.onfetchCartList();
  };
  render() {
    const productsList = this.props.products.map(product => (
      <ProductListItem key={product.id} product={product} />
    ));
    return <div>{productsList}</div>;
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchAllProducts: () => dispatch(actionCreators.fetchAllProducts()),
    onProfileDetail: () => dispatch(actionCreators.profile())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(ProductsList);
