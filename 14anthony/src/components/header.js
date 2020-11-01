import React from 'react'
import { Navbar, Nav, Container, } from 'react-bootstrap';

const header = () => {
    return (

        <header>
            <Navbar bg="light" variant="blue" expand="lg" collapseOnSelect>
                <Container>

                    <Navbar.Brand bg="light" variant="blue" href="/">Anthony</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/login">Home</Nav.Link>
                            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>


                </Container>

            </Navbar>
        </header>

    )
}

export default header