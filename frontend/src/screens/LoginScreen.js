import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginScreen = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Logging in user");
  }

  return (
    <>
      <h1 className="text-center mt-3">Login</h1>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Card>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                <Form.Group id="form_email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control placeholder="Enter your email..." type="email" name="email"></Form.Control>
                </Form.Group>
                <Form.Group id="form_password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control placeholder="Enter your password..." type="password"></Form.Control>
                </Form.Group>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Button type="submit" className="centered justify-content-center">Log in</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
          <p className="text-center mt-3">Don't have an account? <Link to="/register">Register</Link></p>
        </Col>
        <Col md={3}>
          
        </Col>
      </Row>
        
    </>
  )
}

export default LoginScreen
