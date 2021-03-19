import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './style.css'
import CartWidget from '../CartWidget'

const Navegador = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Home</Navbar.Brand>
            <Nav className="mr-auto">
                <NavDropdown title="Catergorías" id="basic-nav-dropdown">
                    <NavDropdown.Item>Celulares</NavDropdown.Item>
                    <NavDropdown.Item>Computadoras</NavDropdown.Item>
                    <NavDropdown.Item>Televisores</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <CartWidget />
            </Nav>
        </Navbar>
    )
}

export default Navegador
