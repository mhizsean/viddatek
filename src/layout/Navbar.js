import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="transparent" expand="lg" >
                    <div className="container">
                    <Navbar.Brand href="/">Viddatek</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="#link">Portfolio</Nav.Link>
                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                       
                        </Nav>
                       
                    </Navbar.Collapse>
                    </div>
                    
                </Navbar>
            </div>
        )
    }
}

export default NavBar;
