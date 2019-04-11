import React, { Component } from "react";
import { connect } from "react-redux";
import CartListItem from "./CartListItem";
import * as actionCreators from "../../store/actions";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading";
import { Link, Redirect } from "react-router-dom";

class Cart extends Component {
  componentDidMount() {
    this.props.onfetchCartList();
  }

  render() {
    let cartsList;
    if (this.props.loading) {
      cartsList = <Loading />;
    } else {
      cartsList = this.props.order.cart_items.map(item => (
        <CartListItem key={item.id} item={item} />
      ));
    }

    return (
      <div>
        <div className="page-top-info ">
          <div className="container">
            <h4>Your cart</h4>
            <div className="site-pagination ">
              <Link to="/">Home</Link> /<Link to="/cart">Your cart</Link>
            </div>
          </div>
        </div>

        <section className="cart-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="cart-table">
                  <h3 className="text-warning">
                    {" "}
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="text-teal"
                    />{" "}
                    Your Cart
                  </h3>
                  <hr />
                  <div className="cart-table-warp">{cartsList}</div>

                  <div className="total-cost teal">
                    <h6>
                      Total <span>{this.props.order.total}</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 card-right">
                <form className="promo-code-form">
                  <input type="text" placeholder="Enter promo code" />
                  <button className="text-dark">Submit</button>
                </form>
                <Link to="/checkout">
                  <div className="site-btn btn-warning">
                    Proceed to checkout
                  </div>
                </Link>
                <Link to="/products">
                  <div className="site-btn sb-dark">Continue shopping</div>
                </Link>
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
    // onCheckout: orderID => dispatch(actionCreators.checkout(orderID)),
    onfetchCartList: () => dispatch(actionCreators.fetchCartList())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
);
