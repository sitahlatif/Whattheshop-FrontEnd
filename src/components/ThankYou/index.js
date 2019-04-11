import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link } from "react-router-dom";
function mapStateToProps(state) {
  return { order: state.cartRoot.order };
}

function mapDispatchToProps(dispatch) {
  return {
    finalCheckout: orderID => dispatch(actionCreators.final_checkout(orderID)),
    checkExpired: () => dispatch(actionCreators.checkForExpiredToken()),
    fetchCartList: () => dispatch(actionCreators.fetchCartList())
  };
}

class index extends Component {
  componentDidMount = async () => {
    this.props.checkExpired();
    await this.props.fetchCartList();
    this.props.finalCheckout(this.props.order.id);
  };

  render() {
    return (
      <div className="jumbotron text-xs-center">
        <h1 className="display-3">Thank You For Your Purchase!</h1>
        <p className="lead">
          <strong>Please check your email</strong> for information regarding
          your order.
        </p>
        <p>
          Having trouble? <a href="">Contact us</a>
        </p>
        <p className="lead">
          <Link className="btn btn-primary btn-sm" to="/home" role="button">
            Continue to homepage
          </Link>
        </p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
