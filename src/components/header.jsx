import { Nav, Navbar } from "react-bootstrap";
// import Logo from '../components/public/images/logo.png'
import '../components/css/header.css';
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div id="Home">
                <Navbar collapseOnSelect expand="md" bg="" variant="dark" className="nav-bar-top fixed-top">
                    <Nav.Link href="#Home" className="nav-brand text-dark">
                        {/* <img className="logo" src={Logo} alt='logo' /> */}
                        Ariel Elazarov
                    </Nav.Link>
                    <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse bg="dark" id="responsive-navbar-nav">
                        <Nav className="ml-auto text-center ">
                            <Nav.Link href="#About" className="text-white nav-links">About Me</Nav.Link>
                            <Nav.Link href="#Experience" className="text-white nav-links">Experience</Nav.Link>
                            <Nav.Link href="#Projects" className="text-white nav-links">Projects</Nav.Link>
                            <Nav.Link href="#Contact" className="text-white nav-links"><a className="contact-link" href="mailto:+ariel.elazarov@icloud.com">Contact Me</a></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
    
};

export default Header;