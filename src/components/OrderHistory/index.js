import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";

class OrderHistory extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

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

                  <button
                    className="btn btn-dark"
                    variant="primary"
                    onClick={this.handleShow}
                  >
                    PRINT ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header
            closeButton
            style={{ backgroundColor: "gray", color: "white" }}
          >
            <Modal.Title># Orders Detail:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product name</th>
                  <th>Quantity:</th>
                  <th>Price:</th>
                </tr>
              </thead>
              <tbody>
                {order.cart_items.map(item => (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.product.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.product.price}</td>
                  </tr>
                ))}
                <tr class="total">
                  <td>Total: {order.total} SR</td>
                  {/* <td>400$</td> */}
                  <td />
                </tr>
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
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
