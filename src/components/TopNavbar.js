import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TopNavbar.css";

const TopNavbar = () => {
  return (
    <>
      <Navbar variant="dark" expand="lg" className="nav">
        <Navbar.Brand href="/">
          <p className="generatorMix">
            <span style={{ fontWeight: "bold", fontSize: "25px" }}>g</span>
            <span
              style={{ color: "red", fontWeight: "bold", fontSize: "30px" }}
            >
              E
            </span>
            neratorMi
            <span
              style={{
                fontWeight: "bold",
                fontSize: "35px",
                color: "darkblue",
                fontFamily: "cursive",
              }}
            >
              X
            </span>
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <i className="fas fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto font-20">
            <Link className="navMenu" to="/">
              Home
            </Link>
            <Link className="navMenu" to="/about">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNavbar;
