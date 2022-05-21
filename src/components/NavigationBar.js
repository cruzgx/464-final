import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components'

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;
        
        &:hover {
            color: white;
        }
    }
`;



export const NavigationBar = () => {
    // <Styles>
    //     <Navbar expand='lg' fixed="top">
    //         <Navbar.Brand href="/">Park Tracker</Navbar.Brand>
    //     </Navbar>
    // </Styles>
    <h1>Test</h1>
}