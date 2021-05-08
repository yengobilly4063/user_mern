import React from 'react'
import {Col, Row, Card, Form, Button} from "react-bootstrap"
import { Link } from 'react-router-dom'


const RegisterScreen = () => {

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    console.log("registering user...")
  }

  return (
    <div>
      <h1 className="text-center mt-3">Register</h1>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Card>
            <Card.Body>
                <Form onSubmit={handleRegisterSubmit}>
                <Form.Group id="form_name">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control placeholder="Name example 'Bill'" type="text" name="name"></Form.Control>
                </Form.Group>
                <Form.Group id="form_email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control placeholder="Email 'example@mail.com'" type="email" name="email"></Form.Control>
                </Form.Group>
                <Form.Group id="form_password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control placeholder="Password '****'" type="password"></Form.Control>
                </Form.Group>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Button type="submit" className="centered justify-content-center">Register</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
          <p className="text-center mt-3">Already have a account? <Link to="/login">Log in</Link></p>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  )
}

export default RegisterScreen
