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
            <div
              className="pink-text "
              style={{
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                backgroundColor: "lightgray",
                width: "50"
              }}
            >
              <h5
                className="card-title text-dark"
                style={{ paddingLeft: 120, fontWeight: "bold" }}
              >
                {product.name}
              </h5>
            </div>

            <p className="card-text">Added By : {product.added_by.username}</p>
            <p className="card-text">Price : {product.price}</p>
            <p className="card-text">Stock : {product.stock}</p>

            <div className="">
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
              {this.state.quantity <= product.stock ? (
                <div>
                  <a
                    onClick={() => {
                      this.props.addItemToCart(
                        order.id,
                        product.id,
                        this.state.quantity
                      );
                    }}
                    data-toggle="modal"
                    data-target="#modalAbandonedCart"
                    className="p-3 "
                    style={{ fontSize: 25 }}
                  >
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="text-dark"
                    />
                  </a>
                  <Link to={`/products/${product.id}/`}>
                    <a className="p-3 " style={{ fontSize: 25 }}>
                      <FontAwesomeIcon icon={faEye} className="text-warning" />
                    </a>
                  </Link>
                  <a className="p-3 ">
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ fontSize: 25 }}
                      className="text-danger"
                    />
                  </a>
                </div>
              ) : (
                <div>
                  <p>out of stock</p>
                  <a className="p-3" style={{ fontSize: 25 }}>
                    <FontAwesomeIcon
                      icon={faExclamationCircle}
                      className="text-danger"
                    />
                  </a>
                  <Link to={`/products/${product.id}/`}>
                    <a className="p-3 " style={{ fontSize: 25 }}>
                      <FontAwesomeIcon icon={faEye} className="text-warning" />
                    </a>
                  </Link>
                  <a className="p-3 ">
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ fontSize: 20 }}
                      className="text-danger"
                    />
                  </a>
                </div>
              )}
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
