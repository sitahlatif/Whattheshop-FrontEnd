import React, { Component } from "react";
// import HomePage from "./HomePage";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <center>
        <div id="error">
          <h1 className="notFoundTitle">Oops! That page can’t be found.</h1>
          <p className="notFoundDesc">
            It looks like nothing was found at this location. Maybe try one of
            the links in the menu or press back to go to the previous page.
          </p>
          <center>
            <div className="back-link">
              {/* <Link to="/HomePage">
                <h5>Back to HomePage</h5>
              </Link> */}
            </div>
          </center>
        </div>
      </center>
    );
  }
}
