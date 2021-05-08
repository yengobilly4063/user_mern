import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"

const Header = () => {
  return (
    <header>
      <Navbar variant="dark" bg="dark" expand="md" >
        <Container>
          <Navbar.Brand>
            <LinkContainer to="/">
              <Nav.Link>USER MERN</Nav.Link>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="simple-nav-bar"></Navbar.Toggle>
          <Navbar.Collapse aria-controls="simple-nav-bar">
            <Nav className="ml-auto">
              <LinkContainer to="/login">
                <Nav.Link>Log in</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
