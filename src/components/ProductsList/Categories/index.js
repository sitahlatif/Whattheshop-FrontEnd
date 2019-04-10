import React, { Component } from "react";
import { connect } from "react-redux";
import Category from "./Category";
function mapStateToProps(state) {
  return {
    categories: state.productsRoot.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

class index extends Component {
  render() {
    const categoriesList = this.props.categories.map(category => (
      <Category key={category.name} categoryName={category.name} />
    ));
    return (
      <ul className="category-menu">
        {categoriesList}
        {/* <li>
          <a href="#">Woman wear</a>
        </li>
        <li>
          <a href="#">Man Wear</a>
          <ul className="sub-menu">
            <li>
              <a href="#">
                Midi Dresses <span>(2)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Maxi Dresses<span>(56)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Prom Dresses<span>(36)</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Children</a>
        </li>
        <li>
          <a href="#">Bags & Purses</a>
        </li>
        <li>
          <a href="#">Eyewear</a>
        </li>
        <li>
          <a href="#">Footwear</a>
        </li> */}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(index);
