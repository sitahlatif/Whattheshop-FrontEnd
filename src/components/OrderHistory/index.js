import React, { Component } from "react";
import { connect } from "react-redux";

class OrderHistory extends Component {
  render() {
    const history = this.props.user.orders.map(order => (
      <div>
        {order.username}
        {order.cart_items}
        {order.total}
        {order.paid}
        {order.order_date}
        {order.checkout}
      </div>
    ));
    return <div> {history}</div>;
  }
}
const mapStateToProps = state => {
  return {
    user: state.authRoot.user
  };
};

export default connect(mapStateToProps)(OrderHistory);
