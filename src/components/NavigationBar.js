import { Fragment, useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavigationBar = (props) => {
  const [selectedTile, setSelectedTime] = useState("home");
  useEffect(() => {
    setSelectedTime(props.page);
  }, [props.page]);
  const styleAbout = selectedTile === "about" ? "text-theme" : null;
  const styleRequest = selectedTile === "request" ? "text-theme" : null;
  const styleLegal = selectedTile === "legal" ? "text-theme" : null;
  return (
    <Fragment>
      <Navbar
        expand="md"
        className="w-100 navbar-light mx-auto mt-0 position-absolute"
        style={{ zIndex: "100" }}
      >
        <Link to="/">
          <Navbar.Brand
            className="text-dark font-weight-bold fw-bolder position-absolute"
            style={{ top: "8px" }}
          >
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="HelpCorona Logo"
            />{" "}
            HelpCorona
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-dark ml-auto"
        />
        <Navbar.Collapse
          className="mx-auto p-0 m-0 bg-white"
          id="basic-navbar-nav"
        >
          <Nav className="text-dark mx-auto">
            <Link className="nav-link" to="/">
              <span className={styleRequest}>Home</span>
            </Link>
            <Link className="nav-link" to="/about">
              <span className={styleAbout}>About</span>
            </Link>
            <Link className="nav-link" to="/legal">
              <span className={styleLegal}>Disclaimer</span>
            </Link>
            <a className="nav-link" href="/about#volunteer">
              <span>Volunteer</span>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavigationBar;
