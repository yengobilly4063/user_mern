import React, {} from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import {LinkContainer} from "react-router-bootstrap"
import { logoutUser } from '../redux/actions/userActions'


const Header = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.userInfo)

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logoutUser())
  }

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
              {user ? 
                <>
                  <Nav.Item style={{display: "block", lineHeight: "1.5", padding: ".5rem 1rem", color: "#fff"}}>
                    Welcome {user.name}
                  </Nav.Item>
                  <Nav.Item style={{display: "block", lineHeight: "1.5", padding: ".5rem 1rem", color: "#fff", cursor: "pointer"}} onClick={handleLogout}>
                    Logout
                  </Nav.Item>
                </>
                :
                <>
              <LinkContainer to="/login">
                <Nav.Link>Log in</Nav.Link>
                </LinkContainer>
              </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
