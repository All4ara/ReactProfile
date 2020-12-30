import { Nav, Navbar } from "react-bootstrap";
// import Logo from '../components/public/images/logo.png'
import '../components/css/header.css';
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div id="Navbar">
                <Navbar collapseOnSelect expand="md" bg="" variant="dark" className="nav-bar fixed-top">
                    <Nav.Link href="#Home" className="nav-brand text-dark">
                        {/* <img className="logo" src={Logo} alt='logo' /> */}
                        Ariel Elazarov
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto text-center ">
                            <span className="spinner-grow spinner-grow-sm mt-3" role="status"></span>
                            <Nav.Link href="#About" className="text-white nav-links">About Me</Nav.Link>
                            <span className="spinner-grow spinner-grow-sm mt-3" role="status"></span>
                            <Nav.Link href="#Experience" className="text-white nav-links">Experience</Nav.Link>
                            <span className="spinner-grow spinner-grow-sm mt-3" role="status"></span>
                            <Nav.Link href="#Projects" className="text-white nav-links">Projects</Nav.Link>
                            <span className="spinner-grow spinner-grow-sm mt-3" role="status"></span>
                            <Nav.Link href="#Contact" className="text-white nav-links">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
    
};

export default Header;