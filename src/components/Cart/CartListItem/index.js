import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../../store/actions/cartAction";

/* this is just temp im using li to just display it in a list.*/
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
class index extends Component {
  state = {
    quantity: this.props.item.quantity
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <table className="col-12">
          <thead className="text-center">
            <tr>
              <th className="product-th">Product</th>
              <th className="quy-th">Quantity</th>
              <th className="total-th">Stock</th>
              <th className="total-th">Price</th>
              <th className="total-th">Subtotal</th>
              <th className="total-th" />
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              {/* <div className="card w-50">
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
        </div> */}

              <td class="product-col">
                <img src="img/calyart.jpg" alt="" />
                <div class="pc-title">
                  <h4>{this.props.item.product.name}</h4>
                </div>
              </td>
              <td class="quy-col">
                <div class="quantity">
                  <div class="pro-qty">
                    <form onSubmit={this.submitHandler}>
                      <input
                        className="form-control"
                        type="number"
                        placeholder="quantity"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.changeHandler}
                      />
                    </form>
                    {this.state.quantity <= this.props.item.product.stock ? (
                      <div>
                        {/* <p className="card-text">
                        subtotal: {this.props.item.subtotal} SR
                      </p> */}
                        {/* <a
                      onClick={() =>
                        this.props.updateItemCart(
                          this.props.item.id,
                          this.state.quantity
                        )
                      }
                      className="btn btn-primary"
                    >
                      update
                    </a>
                    */}
                      </div>
                    ) : (
                      <div>
                        <p>out of stock</p>
                        {/* <a
                      onClick={() =>
                        this.props.deleteItemCart(this.props.item.id)
                      }
                      className="btn btn-danger"
                    >
                      delete
                    </a> */}
                      </div>
                    )}
                  </div>
                </div>
              </td>
              <td class="size-col">
                <p>{this.props.item.product.stock}</p>
              </td>
              <td className="total-col">
                <p>{this.props.item.product.price} SR</p>
              </td>

              <td class="total-col">
                <h4>{this.props.item.subtotal} SR</h4>
              </td>
              <td>
                {" "}
                <a
                  onClick={() =>
                    this.props.updateItemCart(
                      this.props.item.id,
                      this.state.quantity
                    )
                  }
                  className="text-danger"
                >
                  <p>UPDATE</p>
                </a>
                <a
                  onClick={() => this.props.deleteItemCart(this.props.item.id)}
                  className="text-danger"
                >
                  <FontAwesomeIcon icon={faWindowClose} className="text-teal" />{" "}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onfetchCartList: () => dispatch(actionCreators.fetchCartList()),
    updateItemCart: (itemID, quantity) =>
      dispatch(actionCreators.updateItemCart(itemID, quantity)),
    deleteItemCart: itemID => dispatch(actionCreators.deleteItemCart(itemID))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(index);
