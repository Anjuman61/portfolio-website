import React from 'react';
import logo from '../../../images/Mosammat.png'
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
     
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{position:'sticky'}}>
                <Navbar.Brand href="#home"><img width='80px' height='40px' src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#header">About Me</Nav.Link>
                      
                    </Nav>
                    <Nav>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#blogs">Blogs</Nav.Link>
                        <Nav.Link eventKey={2} href="#contacts">
                            Contact Me
                         </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      
    );
};

export default NavBar;