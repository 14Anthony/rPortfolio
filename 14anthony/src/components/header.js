import React from 'react'
import { Navbar, Nav, Container, } from 'react-bootstrap';

const Header = () => {
    return (

        <header>
            <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>

                <Container>

                    <Navbar.Brand bg="light" variant="blue" href="/">14Anthony</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/login"><i className="fas fa-hotel"></i>Home</Nav.Link>
                            <Nav.Link href="/Project"><i className="far fa-lightbulb"></i>Project</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>


                </Container>

            </Navbar>
        </header>

    )
}

export default Header

