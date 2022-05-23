import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Nav } from "react-bootstrap";


const NavigationBar = () => {
    return(
        <>
            <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/"><i>The Plant Fanatic</i></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                <Nav className="mfe-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href='/bio'>Bio</Nav.Link>
                </Nav>
            </Container>
            </Navbar>
            <br/><br/><br/>
        </>
        
    )
}

export default NavigationBar

