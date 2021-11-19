import React from 'react'
import { Nav, Navbar, Brand, Link, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export const BarNav = () => {
    
    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Container>
                    <Navbar.Brand className="logo" style={{color:"#FC462D"}}>La Tiendita</Navbar.Brand>
                    <div>
                        <Nav className="me-auto">
                            <Button variant="warning mx-2" style={{color:"#ffffff"}}>Gestionar Productos</Button>
                            <Button variant="success mx-2"> <FontAwesomeIcon icon={faShoppingCart}/> Carrito</Button>
                        </Nav>
                        </div>
                </Container>
            </Navbar>
        </div>
    )
}