import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../../store/actions/";

import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HoverImage from "react-hover-image";
import calyart from "../../../calyart.jpg";
import handmade from "../../../handmade.jpg";
import Loading from "../../Loading";
import {
  faShoppingCart,
  faHeart,
  faEye,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

/* this is just temp im using li to just display it in a list.*/
import { withRouter } from "react-router-dom";
class index extends Component {
  state = {
    quantity: ""
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.quantity !== prevState.quantity) {
      this.props.onFetchAllProducts();
    }
    // console.log(
    //   "[ProductListitem.js] this.state.quantity: ",
    //   this.state.quantity
    // );
    // console.log("[ProductListitem.js] prevState: ", prevState);
    // console.log(
    //   "[ProductListitem.js] prevState.quantity: ",
    //   prevState.quantity
    // );
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    let order;
    if (this.props.loading) {
      order = <Loading />;
    } else {
      order = this.props.order;
    }
    console.log(order, "order_id");
    const { product } = this.props;
    return (
      <div>
        <div className="card  narrower m-5 ">
          {/* <img src="img/calyart.jpg" alt="Card image cap" /> */}
          <HoverImage
            className="card-img-top"
            alt="Card image cap"
            style={{
              height: 390,
              width: 330,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20
            }}
            src={calyart}
            hoverSrc={handmade}
          />

          <a>
            <div className="mask rgba-white-slight" />
          </a>

          <div className="card-body card-body-cascade">
            <h5 className="pink-text pb-2 pt-1">
              <i className="fas fa-utensils" />

              <h5 className="card-title">{product.name}</h5>
            </h5>

            <p className="card-text">Added By {product.added_by}</p>
            <p className="card-text">Stock {product.stock}</p>

            <div className="">
              {this.state.quantity <= product.stock ? (
                <div>
                  <form>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="quantity"
                      name="quantity"
                      value={this.state.quantity}
                      onChange={this.changeHandler}
                    />
                  </form>
                  <button
                    onClick={() => {
                      this.props.addItemToCart(
                        order.id,
                        product.id,
                        this.state.quantity
                      );
                    }}
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#modalAbandonedCart"
                    className="btn btn-dark rounded-circle"
                  >
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="text-light"
                    />
                  </button>
                </div>
              ) : (
                <div>
                  <p>out of stock</p>
                  <a className="btn btn-danger rounded-circle">
                    <FontAwesomeIcon
                      icon={faExclamationCircle}
                      className="text-light"
                    />
                  </a>
                </div>
              )}
              <Link to={`/products/${product.id}`}>
                <a className="btn btn-warning rounded-circle">
                  <FontAwesomeIcon icon={faEye} className="text-light" />
                </a>
              </Link>
              <a className="btn btn-danger rounded-circle">
                <FontAwesomeIcon icon={faHeart} className="text-light" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="modal fade right"
          id="modalAbandonedCart"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
          data-backdrop="false"
        >
          <div
            className="modal-dialog modal-frame modal-top modal-notify modal-success"
            role="document"
            style={{ maxWidth: "100%", backgroundColor: "gray" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <p className="heading">
                  Successfuly Added Product to the cart..!
                </p>
                <Link to="/cart">
                  <a type="button" className="btn btn-success">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="text-light"
                    />
                    Go to cart
                  </a>
                </Link>

                <a
                  type="button"
                  className="btn btn-danger waves-effect"
                  data-dismiss="modal"
                >
                  Cancel
                </a>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true" className="white-text">
                    &times;
                  </span>
                </button>
              </div>
            </div>
          </div>
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
    profile: state.profileRoot.profile,
    loading: state.profileRoot.loading,
    order: state.cartRoot.order
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchAllProducts: () => dispatch(actionCreators.fetchAllProducts()),
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
