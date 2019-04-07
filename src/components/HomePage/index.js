import React, { Component } from "react";
import { connect } from "react-redux";
import ItemsCarousel from "react-items-carousel";
import range from "lodash/range";
import Slider from "react-slick";

class HomePage extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            {/* <div className="card bg-dark text-white">
              <img
                src="img/Head-NV.jpg"
                alt=""
                style={{ width: 1650, height: 450 }}
                className="card-img"
                alt="..."
              /> */}
            <div className="card card-cascade m-5">
              <div className="view view-cascade overlay">
                <img
                  className="card-img-top"
                  src="img/Head-NV.jpg"
                  alt="Card image cap"
                  style={{ width: 1650, height: 350 }}
                />
                <a>
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
            </div>

            <div className="card-body card-body-cascade text-center m-5">
              <h5 className="pink-text pb-2 pt-1">
                <i className="fas fa-utensils" /> Culinary
              </h5>

              <h4 className="font-weight-bold card-title">
                Cheat day inspirations
              </h4>

              <p className="card-text">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
              </p>

              <a className="btn btn-unique">Button</a>
            </div>
          </div>

          <div className="mt-3">
            <div className="card-deck">
              <div className="card mb-1">
                <div className="view overlay">
                  <img
                    className="card-img-top"
                    src="img/hanmade2.png"
                    alt="Card image cap"
                    style={{ height: 400 }}
                  />
                  <a href="#!">
                    <div className="mask rgba-white-slight" />
                  </a>
                </div>

                <div className="card-body text-center">
                  <h4 className="card-title">Crafts</h4>

                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button
                    type="button"
                    className="btn btn-dark btn-md text-center"
                  >
                    Read more
                  </button>
                </div>
              </div>

              <div className="card mb-1">
                <div className="view overlay">
                  <img
                    className="card-img-top"
                    src="img/handmade.jpg"
                    alt="Card image cap"
                    style={{ height: 400 }}
                  />
                  <a href="#!">
                    <div className="mask rgba-white-slight" />
                  </a>
                </div>

                <div className="card-body text-center">
                  <h4 className="card-title">Accessories</h4>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button type="button" className="btn btn-dark btn-md">
                    Read more
                  </button>
                </div>
              </div>

              <div className="card mb-1">
                <div className="view overlay">
                  <img
                    className="card-img-top "
                    src="img/calyart.jpg"
                    alt="Card image cap"
                    style={{ height: 400 }}
                  />
                  <a href="#!">
                    <div className="mask rgba-white-slight" />
                  </a>
                </div>

                <div className="card-body text-center">
                  <h4 className="card-title">Clay Art</h4>

                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>

                  <button type="button" className="btn btn-dark btn-md">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps)(HomePage);
