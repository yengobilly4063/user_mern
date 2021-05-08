import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../types/userTypes"
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

    const {data} = axios.post(`http://localhost/api/users`, user, config)

    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: data
    })
  }catch(error){
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.message
    })
  }
}