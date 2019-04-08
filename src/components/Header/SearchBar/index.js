import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";
import { Link } from "react-router-dom";
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class index extends Component {
  state = {
    query: ""
  };
  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state.query);
    // this.props.search(this.state.query);
  };

  render() {
    return (
      <form className="header-search-form" onSubmit={this.handleSubmit}>
        <input
          name="query"
          type="text"
          placeholder="Search on divisima ...."
          onChange={this.handleChange}
        />
        <Link
          to={{
            pathname: "/products",
            state: {
              query: this.state.query
            }
          }}
        >
          <i className="flaticon-search" />
        </Link>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
