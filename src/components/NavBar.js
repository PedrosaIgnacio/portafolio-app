import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <div className="name-title">
              IGNACIO <span className="text-muted">PEDROSA</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="h6">
              <NavLink
                to={'/'}
                className="text-decoration-none list-style-none mx-4"
              >
                <Nav.Link href="/">INICIO</Nav.Link>
              </NavLink>

              <NavLink
                to={'/contacto'}
                className="text-decoration-none list-style-none mx-4"
              >
                <Nav.Link href="/contacto">CONTACTO</Nav.Link>
              </NavLink>
              <NavLink
                to={'/test-hooks'}
                className="text-decoration-none list-style-none mx-4"
              >
                <Nav.Link href="/test-hooks">TEST HOOKS</Nav.Link>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
