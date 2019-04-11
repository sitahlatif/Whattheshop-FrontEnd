import React, { Component } from "react";

class index extends Component {
  render() {
    return (
      <div>
        <li>
          <div className="pl-thumb">
            <img
              src={
                "http://127.0.0.1:8000" +
                this.props.item.product.images[0].image
              }
              alt=""
            />
          </div>
          <h6>{this.props.item.product.name}</h6>
          <p>{this.props.item.product.quantity}</p>
          <p>{this.props.item.product.price}</p>
        </li>
      </div>
    );
  }
}

export default index;
