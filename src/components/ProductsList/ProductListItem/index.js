import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../../store/actions/cartAction";

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
      order = this.props.profile.user.orders.find(
        order => order.paid === false
      );
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

            <div className="">
              {this.state.quantity <= product.stock ? (
                <Redirect path="/cart">
                  <a
                    onClick={() =>
                      this.props.addItemToCart(
                        order.id,
                        product.id,
                        this.state.quantity
                      )
                    }
                    className="btn btn-dark rounded-circle"
                  >
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="text-light"
                    />
                  </a>
                </Redirect>
              ) : (
                <a
                  onClick={() =>
                    this.props.addItemToCart(
                      order.id,
                      product.id,
                      this.state.quantity
                    )
                  }
                  className="btn btn-danger rounded-circle"
                >
                  <FontAwesomeIcon
                    icon={faExclamationCircle}
                    className="text-light"
                  />
                </a>
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
    loading: state.profileRoot.loading
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
