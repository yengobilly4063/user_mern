import React, {useState, useEffect} from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Message from '../coponents/Message'
import {useDispatch, useSelector} from "react-redux"
import { loginUser } from '../redux/actions/userActions'

const LoginScreen = ({history}) => {
  const dispatch = useDispatch()
  const [state, setState] = useState({name: "", email: "", password: "", message: ""})
  const {loginSuccess} = useSelector(state => state.userInfo)

  const {email, password} = state

  const handleSubmit = (e) => {
    setState({...state, message: ""})
    e.preventDefault()
    if(!email || !password){
      setState({...state, message: "Please provid email and password"})
    }else{
      dispatch(loginUser({email, password}))
    }
  }

  useEffect(() => {
    if(loginSuccess){
      history.push("/")
    }else{
      history.push("/login")
    }
  }, [history, loginSuccess])

  const handleChange = (e) => {
    const {name, value} = e.target
    setState({...state, [name]: value })
  }

  return (
    <>
      <h1 className="text-center mt-3">Login</h1>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <Card>
          {state.message && <Message>{state.message}</Message>}
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                <Form.Group id="form_email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control onChange={handleChange} name="email" placeholder="Enter your email..." type="email"></Form.Control>
                </Form.Group>
                <Form.Group id="form_password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control onChange={handleChange} name="password" placeholder="Enter your password..." type="password"></Form.Control>
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
