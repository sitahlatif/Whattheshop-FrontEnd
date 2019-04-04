import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../../store/actions/cartAction";

import { Link } from "react-router-dom";

/* this is just temp im using li to just display it in a list.*/
import { withRouter } from "react-router-dom";
class index extends Component {
  state = {
    quantity: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  render() {
    const order = this.props.profile.user.orders.find(
      order => order.paid === false
    );
    const { product } = this.props;
    return (
      <div className="card col-4">
        <div className="card-body ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4iWPF7I8A41Ah0LXqciNRrv1OeQJ9Ln2JNGpvzAtTTzhFY6aDw"
            className="card-img-top"
            alt="..."
          />
          <Link to={`/products/${product.id}`}>
            <h5 className="card-title">{product.name}</h5>
          </Link>

          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <input
            type="text"
            className="form-control"
            id="quantity"
            value={this.state.quantity}
            name="quantity"
            placeholder="quantity"
            onChange={this.handleChange}
          />
          <a href="#" className="btn btn-dark">
            View Detail
          </a>
          <a
            href="#"
            onClick={() =>
              this.props.addItemToCart(
                order.id,
                product.id,
                this.state.quantity
              )
            }
            className="btn btn-primary"
          >
            Add to cart
          </a>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    // user: state.authReducer.user,
    orders: state.ordersRoot.orders,
    // orderID: state.cartReducer.orderID,
    profile: state.profileRoot.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: (orderID, productID, quantity) =>
      dispatch(actionCreators.addItemToCart(orderID, productID, quantity))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(index)
);
