import React, {useState, useEffect} from 'react'
import {Col, Row, Card, Form, Button} from "react-bootstrap"
import { Link } from 'react-router-dom'
import Message from '../coponents/Message'
import {useDispatch, useSelector} from "react-redux"
import {registerUser} from "../redux/actions/userActions"


const RegisterScreen = ({history}) => {

  const dispatch = useDispatch()
  const [userState, setUserState] = useState({name: "", email: "", password: "", message: ""})
  const userInfo = useSelector(state => state.userInfo)
  const {registerSuccess} = userInfo

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    const {name, email, password} = userState
    setUserState({...userState, message: ""})
    if(!name && !email && !password){
      setUserState({...userState, message: "Please provide all fields"})
    }else{
      dispatch(registerUser({name, email, password}))
    }
  }

  useEffect(() => {
    if(registerSuccess){
      history.push("/login")
    }else{
      history.push("/register")
    }
  }, [registerSuccess, history])
 

  const handleChange = (e) => {
    const {name, value} = e.target
    setUserState({...userState, [name]: value })
  }

  return (
    <div>
      <h1 className="text-center mt-3">Register</h1>
      <Row>
        <Col md={3}></Col>
        <Col md={6}> 
            {(userState.message && !registerSuccess) && <Message>{userState.message}</Message>}
            <Card>
            <Card.Body>
                <Form onSubmit={handleRegisterSubmit}>
                <Form.Group id="form_name">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control onChange={handleChange} placeholder="Enter name" type="text" name="name"></Form.Control>
                </Form.Group>
                <Form.Group id="form_email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control onChange={handleChange} placeholder="Enter email'" type="email" name="email"></Form.Control>
                </Form.Group>
                <Form.Group id="form_password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control onChange={handleChange} placeholder="Enter password" type="password" name="password"></Form.Control>
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
