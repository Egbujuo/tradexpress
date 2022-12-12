import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import tradExpress from "../Image/TradExpress.png";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar1 = () => {
  const style = {
    backgroundColor: "#7C20BE",
  };

  return (
    <Navbar className="Navbar1" style={style} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={tradExpress} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/instantBuy" className="instant" >Instant buy/sell </Link>
            <Link className="learn">Learn</Link>
            <Link to="/login" className="login">Login</Link>
            <Link to="/getstarted" className="get-started">Get Started</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
