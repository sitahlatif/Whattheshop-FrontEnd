import React, { Component } from "react";
import CheckoutCartItem from "./CheckoutCartItem";
import Loading from "../Loading";
import * as actionCreators from "../../store/actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class index extends Component {
  state = {
    phoneNumber: ""
  };
  componentDidMount() {
    this.props.onfetchCartList();
  }
  handlePay = event => {
    event.preventDefault();
    this.props.onCheckout(this.props.order.id, this.state);
  };
  handleChange = event => this.setState({ phoneNumber: event.target.value });

  render() {
    let cartsList;
    if (this.props.loading) {
      cartsList = <Loading />;
    } else {
      cartsList = this.props.order.cart_items.map(item => (
        <CheckoutCartItem key={item.id} item={item} />
      ));
      // const order = this.props.items.find(order => order.paid === false);
    }
    return (
      <div>
        <section className="checkout-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 order-2 order-lg-1">
                <form className="checkout-form">
                  <div className="cf-title">Billing Address</div>
                  <div className="row">
                    <div className="col-md-7">
                      <p>*Billing Information</p>
                    </div>
                    <div className="col-md-5">
                      <div className="cf-radio-btns address-rb">
                        <div className="cfr-item">
                          <input type="radio" name="pm" id="one" />
                          <label for="one">Use my regular address</label>
                        </div>
                        <div className="cfr-item">
                          <input type="radio" name="pm" id="two" />
                          <label for="two">Use a different address</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row address-inputs">
                    <div className="col-md-12">
                      <input type="text" placeholder="Address" />
                      <input type="text" placeholder="Address line 2" />
                      <input type="text" placeholder="Country" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Zip code" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Phone no." />
                    </div>
                  </div>
                  <div className="cf-title">Delievery Info</div>
                  <div className="row shipping-btns">
                    <div className="col-6">
                      <h4>Standard</h4>
                    </div>
                    <div className="col-6">
                      <div className="cf-radio-btns">
                        <div className="cfr-item">
                          <input type="radio" name="shipping" id="ship-1" />
                          <label for="ship-1">Free</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <h4>Next day delievery </h4>
                    </div>
                    <div className="col-6">
                      <div className="cf-radio-btns">
                        <div className="cfr-item">
                          <input type="radio" name="shipping" id="ship-2" />
                          <label for="ship-2">$3.45</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cf-title">Payment</div>
                  <ul className="payment-list">
                    <li>
                      Paypal
                      <a href="#">
                        <img src="img/paypal.png" alt="" />
                      </a>
                    </li>
                    <li>
                      Credit / Debit card
                      <a href="#">
                        <img src="img/mastercart.png" alt="" />
                      </a>
                    </li>
                    <li>Pay when you get the package</li>
                    <li>
                      <input
                        type="text"
                        onChange={this.handleChange}
                        placeholder="Phone Number"
                        required
                      />
                    </li>
                  </ul>
                  <button
                    className="site-btn submit-order-btn"
                    onClick={this.handlePay}
                  >
                    Place Order
                  </button>
                </form>
              </div>
              <div className="col-lg-4 order-1 order-lg-2">
                <div className="checkout-cart">
                  <h3>Your Cart</h3>
                  <ul className="product-list">{cartsList}</ul>
                  <ul className="price-list">
                    <li>
                      Total<span>{this.props.order.total}</span>
                    </li>
                    <li>
                      Shipping<span>free</span>
                    </li>
                    <li className="total">
                      Total<span>{this.props.order.total}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    order: state.cartRoot.order,
    // order: state.ordersRoot.orders
    loading: state.cartRoot.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCheckout: (orderID, info) =>
      dispatch(actionCreators.checkout(orderID, info)),
    onfetchCartList: () => dispatch(actionCreators.fetchCartList())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(index)
);
