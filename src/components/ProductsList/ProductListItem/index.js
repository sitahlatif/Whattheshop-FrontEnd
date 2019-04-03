import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}
/* this is just temp im using li to just display it in a list.*/
class index extends Component {
  render() {
    const { product } = this.props;
    return <li>{product.name}</li>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
