import React, { Component } from "react";
import { connect } from "react-redux";

class OrderHistory extends Component {
  render() {
    console.log(this.props.order.cart_item, "this is order history");
    console.log(this.props.profile.user.orders, "this is order history");

    const history = this.props.profile.user.orders.map(order => (
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
    profile: state.profileRoot.profile,
    user: state.authRoot.user,
    order: state.cartRoot.order
  };
};

export default connect(mapStateToProps)(OrderHistory);
