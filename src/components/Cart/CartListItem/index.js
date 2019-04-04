import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../../store/actions/cartAction";

/* this is just temp im using li to just display it in a list.*/
import { withRouter } from "react-router-dom";

class index extends Component {
  render() {
    return (
      <div>
        <div className="card w-50">
          <div className="card-body">
            <h5 className="card-title">{this.props.item.product.name}</h5>
            <p className="card-text">
              Price: {this.props.item.product.price} SR
            </p>
            <input
              type="number"
              className="card-text"
              value={this.props.item.quantity}
            />

            <p className="card-text">
              {" "}
              subtotal: {this.props.item.subtotal} SR
            </p>
            <a href="#" className="btn btn-primary">
              update
            </a>
            <a
              onClick={() => this.props.deleteItemCart(this.props.item.id)}
              className="btn btn-danger"
            >
              delete
            </a>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteItemCart: itemID => dispatch(actionCreators.deleteItemCart(itemID))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(index);
