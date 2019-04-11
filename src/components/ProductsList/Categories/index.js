import React, { Component } from "react";
import { connect } from "react-redux";
import Category from "./Category";
function mapStateToProps(state) {
  return {
    categories: state.productsRoot.categories
  };
}

class index extends Component {
  render() {
    const categoriesList = this.props.categories.map(category => (
      <Category key={category.name} categoryName={category.name} />
    ));
    return <ul className="category-menu">{categoriesList}</ul>;
  }
}

export default connect(mapStateToProps)(index);
