import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap";


export function Menu() {
    return (        
        <div className='menu'>
            <Navbar expand="lg" variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" id='toggle-btn'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto spartakus" id='main-menu'>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/sociais">Redes Sociais</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )
}