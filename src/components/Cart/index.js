import React, { Component } from "react";
import { connect } from "react-redux";
import CartListItem from "./CartListItem";
import * as actionCreators from "../../store/actions";
import { withRouter } from "react-router-dom";
class Cart extends Component {
  componentDidMount() {
    this.props.onfetchCartList();
  }

  render() {
    const cartsList = this.props.items.map(item => (
      <CartListItem key={item.id} item={item} />
    ));
    const order = this.props.items.find(order => order.paid === false);
    console.log(this.order, "caaart");
    return (
      <div>
        <div>{cartsList}</div>
        <button
          className="btn btn-danger m-2"
          // onClick={this.props.onCheckout(this.props.items.order)}
        >
          Back to shopping
        </button>
        <button
          className="btn btn-dark m-2"
          onClick={this.props.onCheckout(this.props.items.order)}
        >
          Checkout
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.cartRoot.items,
    order: state.ordersRoot.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckout: orderID => dispatch(actionCreators.checkout(orderID)),
    onfetchCartList: () => dispatch(actionCreators.fetchCartList())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
);
