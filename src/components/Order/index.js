import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/ordersAction";

class Order extends Component {
  render() {
    return <button onClick={this.props.onCheckout(this.props.order.id)} />;
  }
}
const mapStateToProps = state => {
  return {
    order: this.state.ordersRoot.orders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckout: orderID => dispatch(actionCreators.checkout(orderID))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
