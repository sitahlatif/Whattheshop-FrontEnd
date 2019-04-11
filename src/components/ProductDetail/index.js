import React, { Component } from "react";
import { connect } from "react-redux";
import {
  faShoppingCart,
  faHeart,
  faEye,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../../store/actions";

class ProductDetail extends Component {
  state = {
    quantity: 1
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
    console.log(this.props.products);
    let product = {};
    if (
      this.props.products.find(
        product => product.id == this.props.match.params.productID
      )
    ) {
      product = this.props.products.find(
        product => product.id == this.props.match.params.productID
      );
      console.log(product);
      return (
        <div>
          <div className="page-top-info bg-dark ">
            <div className="container">
              <h4 className="text-light">Category PAge</h4>
              <div className="site-pagination text-light">
                <a className="text-light" href="">
                  Home
                </a>{" "}
                /
                <a className="text-light" href="">
                  Products
                </a>
                /
                <a className="text-light" href="">
                  Product Detail
                </a>
              </div>
            </div>
          </div>

          <section className="product-section">
            <div className="container">
              <div className="back-link">
                <Link to="/products">
                  <h5>Back to Products</h5>
                </Link>
              </div>
              {/* <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
       
          </p> */}{" "}
              <div className="row">
                <div className="col-lg-6">
                  <div className="product-pic-zoom">
                    <img
                      role="presentation"
                      alt=""
                      src={product.images[0].image}
                      className="zoomImg "
                      style={{
                        //   position: "absolute",
                        //   top: "-296.064px",
                        //   left: "-49.6076px",
                        //   opacity: 0,
                        width: "1000px",
                        height: "800px"
                        //   border: "none",
                        //   maxWidth: "none",
                        //   maxHeight: "none"
                      }}
                    />
                  </div>
                  <div
                    className="product-thumbs"
                    tabindex="1"
                    style={{ overflow: "hidden", outline: "none" }}
                  >
                    <div className="product-thumbs-track mt-3">
                      <div
                        className="pt active"
                        data-imgbigurl="img/single-product/1.jpg"
                      >
                        <img src={product.images[0].image} alt="" />
                      </div>
                      <div
                        className="pt"
                        data-imgbigurl="img/single-product/2.jpg"
                      >
                        <img src={product.images[0].image} alt="" />
                      </div>
                      <div
                        className="pt"
                        data-imgbigurl="img/single-product/3.jpg"
                      >
                        <img src={product.images[0].image} alt="" />
                      </div>
                      <div
                        className="pt"
                        data-imgbigurl="img/single-product/4.jpg"
                      >
                        <img src={product.images[0].image} alt="" />
                      </div>
                      <div
                        className="pt"
                        data-imgbigurl="img/single-product/4.jpg"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 product-details">
                  <h2 className="p-title">{product.name}</h2>
                  <p>
                    Added By:
                    {product.added_by.username}
                  </p>
                  <h3 className="p-price">SR {product.price}</h3>
                  <h4 className="p-stock">
                    Available: <span>in Stock {product.stock}</span>
                  </h4>
                  <h4 className="p-stock">
                    Categories:
                    {product.categories.map(category => (
                      <span>{category.name} \</span>
                    ))}
                  </h4>
                  <div className="p-rating">
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o" />
                    <i className="fa fa-star-o fa-fade" />
                  </div>
                  <div className="p-review">
                    <a href="">3 reviews</a>|<a href="">Add your review</a>
                  </div>

                  <div className="quantity">
                    <p>Quantity</p>
                    <div className="pro-qty col-5">
                      <form onSubmit={this.submitHandler}>
                        <input
                          className="form-control col-5"
                          type="text"
                          placeholder="quantity"
                          name="quantity"
                          value={this.state.quantity}
                          onChange={this.changeHandler}
                        />
                      </form>
                    </div>
                    <div />
                    <div className="col-5 mt-5">
                      {this.state.quantity <= product.stock ? (
                        <div>
                          <Link to="/cart">
                            <button
                              onClick={() =>
                                this.props.addItemToCart(
                                  order.id,
                                  product.id,
                                  this.state.quantity
                                )
                              }
                              className="site-btn btn-success text-light"
                            >
                              <FontAwesomeIcon
                                icon={faShoppingCart}
                                className="text-light"
                              />
                              SHOP NOW
                            </button>
                          </Link>
                        </div>
                      ) : (
                        <div className="text-light site-btn btn-danger">
                          Out of stock
                        </div>
                      )}
                    </div>
                  </div>

                  <div id="accordion" className="accordion-area mt-5">
                    <div className="panel">
                      <div className="panel-header" id="headingOne">
                        <button
                          className="panel-link active"
                          data-toggle="collapse"
                          data-target="#collapse1"
                          aria-expanded="true"
                          aria-controls="collapse1"
                        >
                          information
                        </button>
                      </div>
                      <div
                        id="collapse1"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div className="panel-body">
                          <p>{product.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-header" id="headingTwo">
                        <button
                          className="panel-link"
                          data-toggle="collapse"
                          data-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          care details{" "}
                        </button>
                      </div>
                      <div
                        id="collapse2"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div className="panel-body">
                          <img src={product.images[0].image} alt="" />
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin pharetra tempor so dales. Phasellus
                            sagittis auctor gravida. Integer bibendum sodales
                            arcu id te mpus. Ut consectetur lacus leo, non
                            scelerisque nulla euismod nec.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel-header" id="headingThree">
                        <button
                          className="panel-link"
                          data-toggle="collapse"
                          data-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          shipping & Returns
                        </button>
                      </div>
                      <div
                        id="collapse3"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="panel-body">
                          <h4>7 Days Returns</h4>
                          <p>
                            Cash on Delivery Available
                            <br />
                            Home Delivery <span>3 - 4 days</span>
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin pharetra tempor so dales. Phasellus
                            sagittis auctor gravida. Integer bibendum sodales
                            arcu id te mpus. Ut consectetur lacus leo, non
                            scelerisque nulla euismod nec.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="social-sharing">
                    <a href="">
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href="">
                      <i className="fa fa-pinterest" />
                    </a>
                    <a href="">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="">
                      <i className="fa fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    // user: state.authReducer.user,
    orders: state.ordersRoot.orders,
    // orderID: state.cartReducer.orderID,
    profile: state.profileRoot.profile,
    loading: state.profileRoot.loading,
    products: state.productsRoot.products,
    order: state.cartRoot.order
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
  )(ProductDetail)
);
