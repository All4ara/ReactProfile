import { Nav, Navbar } from "react-bootstrap";
import '../components/css/social.css';
import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Insta from '../components/public/images/insta-icon.png'
import Twitter from '../components/public/images/twitter-icon.png'
import Linkedin from '../components/public/images/linkedin.png'
import Git from '../components/public/images/github-icon.png'

// Add all icons to the library so you can use it in your page
library.add(fab)

class Social extends Component {
    render() {
        return (
            <div id="Navbar">
                <Navbar className="nav-bar sticky">
                        <Nav className="m-auto text-center container">
                            <Nav.Link href="https://www.linkedin.com/in/ariel-elazarov-9a178415a/" target="_blank" className=""><img src={Linkedin} alt="" className="social-icons"/></Nav.Link>
                            <Nav.Link href="https://twitter.com/psilocybinist" target="_blank" className=""><img src={Twitter} alt="" className="social-icons"/></Nav.Link>
                            <Nav.Link href="https://www.instagram.com/all4ara/" target="_blank" className=""><img src={Insta} alt="" className="social-icons"/></Nav.Link>
                            <Nav.Link href="https://github.com/All4ara" target="_blank" className=""><img src={Git} alt="" className="social-icons"/></Nav.Link>
                        </Nav>
                </Navbar>
            </div>
        )
    }
    
};

export default Social;