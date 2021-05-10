import { 

  USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, 
  USER_LOGOUT_FAIL, 
  USER_LOGOUT_REQUEST, 
  USER_LOGOUT_SUCCESS, 
  USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,

} from "../types/userTypes"
import axios from "axios"

export const registerUser = (user) => async(dispatch) => {
  try{

    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const {data} = await axios.post(`/api/users`, user, config)

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    })
  }catch(error){
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.message
    })
  }
}

export const loginUser = (user) => async(dispatch) => {
  try{
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const {data} = await axios.post(`/api/users/login`, user, config)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })

    localStorage.setItem("userInfo", JSON.stringify(data))

  }catch(error){
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message
    })
  }
}

export const logoutUser = () => async(dispatch, getState) => {
  try{
    dispatch({
      type: USER_LOGOUT_REQUEST,
    })
    localStorage.removeItem("userInfo")

    dispatch({
      type: USER_LOGOUT_SUCCESS,
    })

  }catch(error){
    dispatch({
      type: USER_LOGOUT_FAIL,
      payload: error.message
    })
  }
}