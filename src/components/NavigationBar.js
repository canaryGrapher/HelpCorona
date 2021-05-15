import { Fragment, useEffect, useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const NavigationBar = (props) => {
    const [selectedTile, setSelectedTime] = useState("home")
    useEffect(() => {
        setSelectedTime(props.page)
    }, [props.page])
    const styleHome = selectedTile === "home" ? "text-theme" : null
    const styleRequest = selectedTile === "request" ? "text-theme" : null
    const styleVaccine = selectedTile === "vaccine" ? "text-theme" : null
    const styleResource = selectedTile === "resource" ? "text-theme" : null
    return (
        <Fragment>
            <Navbar expand="lg" className="position-absolute w-100 navbar-light mx-auto" style={{ zIndex: "100" }}>
                <Navbar.Brand href="/" className="text-dark font-weight-bold fw-bolder position-absolute">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="HelpCorona Logo"
                    />{' '}HelpCorona</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-dark" />
                <Navbar.Collapse className="mx-auto p-0 m-0" id="basic-navbar-nav">
                    <Nav className="text-dark mx-auto">
                        <Link className="nav-link" to="/">
                            <span className={styleHome}>Home</span>
                        </Link>
                        <Link className="nav-link" to="/requests">
                            <span className={styleRequest}>Requests</span>
                        </Link>
                        <Link className="nav-link" to="/resource">
                            <span className={styleResource}>Resources</span>
                        </Link>
                        <Link className="nav-link" to="/vaccine">
                            <span className={styleVaccine}>Vaccination</span>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default NavigationBar