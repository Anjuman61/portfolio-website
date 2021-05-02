import React from 'react';
import logo from '../../../images/Mosammat.png'
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
     
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home"><img width='80px' height='40px' src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">About Me</Nav.Link>
                      
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Skills</Nav.Link>
                        <Nav.Link href="#deets">Projects</Nav.Link>
                        <Nav.Link href="#deets">Blogs</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Contact Me
                         </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      
    );
};

export default NavBar;