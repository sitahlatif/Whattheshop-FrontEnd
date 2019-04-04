import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
/* this is just temp im using li to just display it in a list.*/
class index extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default index;
