import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    category: category => dispatch(actionCreators.filterByCategory(category))
  };
}

class Category extends Component {
  handleClick = () => {
    this.props.category(this.props.categoryName);
  };
  render() {
    return (
      <li>
        <a onClick={this.handleClick} href="#">
          {this.props.categoryName}
        </a>
      </li>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
