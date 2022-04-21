import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import bike_lane_logo from "../../assets/Bike_Lane_white_logo.png";
import { Link, NavLink } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <Navbar style={{ backgroundColor: "#19223B" }} variant="dark">
        <Link to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={bike_lane_logo}
              width="125"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </Link>

        <Nav className="mr-auto">
          <NavLink
            to="/"
            activestyle={{
              fontWeight: "bold",
              color: "white",
            }}
            style={{ color: "white" }}
          >
            Home
          </NavLink>

          <NavLink
            to="/create"
            activestyle={{
              fontWeight: "bold",
              color: "white",
              paddingLeft: 10,
            }}
            style={{ color: "white", paddingLeft: 10 }}
          >
            Create Account
          </NavLink>

          <NavLink
          to="/upload"
          activestyle={{
            fontWeight: "bold",
            color: "white",
            paddingLeft: 10,
          }}
          style={{ color: "white", paddingLeft: 10 }}
          >
            Upload File
          </NavLink>
        </Nav>
      </Navbar>
    );
  }
}