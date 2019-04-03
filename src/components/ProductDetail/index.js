import React, { Component } from "react";
import { connect } from "react-redux";

class ProductDetail extends Component {
  render() {
    let product = {};
    if (this.props.products.find(product => product.id === 1)) {
      product = this.props.products.find(product => product.id === 1);
      return (
        <div>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <p>
            Categories:
            {product.categories.map(category => (
              <p>{category.name}</p>
            ))}
          </p>
          <p>
            Added By:
            {product.added_by}
          </p>
        </div>
      );
    }
    return <div />;
  }
}
// function mapStateToProps(state) {
//   return {
//     products: state.productsRoot.products
//   };
// }

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  null,
  mapDispatchToProps
)(ProductDetail);
