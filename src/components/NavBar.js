import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <div className="display-5">
              IGNACIO <span className="text-muted">PEDROSA</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="h6">
              <Nav.Link href="/">INICIO</Nav.Link>
              <Nav.Link href="/contacto">CONTACTO</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
