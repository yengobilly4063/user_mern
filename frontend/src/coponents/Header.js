import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"

const Header = () => {
  return (
    <header>
      <Navbar variant="dark" bg="dark" expand="md" >
        <Navbar.Brand href="/">USER MERN</Navbar.Brand>
        <Navbar.Toggle aria-controls="simple-nav-bar"></Navbar.Toggle>
        <Navbar.Collapse aria-controls="simple-nav-bar">
          <Nav className="ml-auto">
            <Nav.Link href="/">Register</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
