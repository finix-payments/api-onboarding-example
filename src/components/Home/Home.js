import React, { Component } from "react";
import background from "../../assets/Banner_Bike_Lane.png";
import best_bikes_image from "../../assets/ride-when-you-want-logo.png";
import payment_processing_image from "../../assets/best-in-quality-logo.png";
import mobile_app_image from "../../assets/access-app-logo.png";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron style={{ backgroundImage: `url(${background})` }}>
          <div className="container position-relative ">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="text-center text-white">
                  <h1 className="mb-5">Bikes ready for take off</h1>
                  <p>
                    Bike Lane is the world's leading bike seller. Join our team
                    to get access to our payment processing and dealer network.
                  </p>
                  <div className="">
                    <Link to="/create">
                      <button
                        className="btn btn-primary text-center"
                        id="button-submit"
                        type="button"
                      >
                        Create an Account
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Jumbotron>
        <div className="container-fluid row">
          <div className="col-md-4">
            <div className="">
              <div className=" " style={{}}></div>
              <img
                alt=""
                src={best_bikes_image}
                width="75"
                className="d-inline-block align-left"
              />{" "}
              <div className="">
                <h3>Best in Class bikes available</h3>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="">
              <div className=" " style={{}}></div>
              <img
                alt=""
                src={payment_processing_image}
                width="75"
                className="d-inline-block align-left"
              />{" "}
              <div className="">
                <h3>Great payment processing </h3>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="">
              <div className=" " style={{}}></div>
              <img
                alt=""
                src={mobile_app_image}
                width="75"
                className="d-inline-block align-left"
              />{" "}
              <div className="">
                <h3>Mobile App available</h3>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
