import React, { Component } from "react";
import { connect } from "react-redux";

class OrderHistory extends Component {
  render() {
    console.log(this.props.order.cart_item, "this is order history");
    console.log(this.props.profile.user.orders, "this is order history");

    const history = this.props.profile.user.orders.map(order => (
      <div className="mt-4">
        <div className="container main-secction">
          <div className="row">
            <div className="card" style={{ width: "740px" }}>
              {/*  */}
              {/* {order.total}
        {order.paid}
        {order.order_date} */}

              <div className="card">
                <h5 className="card-header bg-dark text-light">
                  ORDER ID: # {order.id}
                </h5>
                <div className="card-body">
                  <p className="card-text">ORDER DATE: {order.order_date}</p>
                  <p className="card-text">ORDER TOTAL: {order.total} SR</p>
                  <div>
                    <button
                      type="button"
                      class="btn btn-dark"
                      data-toggle="modal"
                      data-target="#modalCart"
                    >
                      PRINT ORDER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="modalCart"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">
                  Orders:
                </h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div class="modal-body">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product name</th>
                      <th>Quantity:</th>
                      <th>Price:</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.cart_items.map(item => (
                      <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.product.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.product.price}</td>
                        <td>
                          <a>
                            <i class="fas fa-times" />
                          </a>
                        </td>
                      </tr>
                    ))}
                    <tr class="total">
                      <th scope="row">5</th>
                      <td>{order.total} SR</td>
                      {/* <td>400$</td> */}
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
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
