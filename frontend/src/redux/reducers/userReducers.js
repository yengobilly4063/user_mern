import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../types/userTypes"

const initialState = {
  loading: false,
  user: {},
  error: ""
}

export const userReducers = (state = initialState, action) =>  {
  switch(action.type){
    // REegister User
    case USER_REGISTER_REQUEST: 
      return {
        ...state, 
        loading: true, user: {}, error: ""
      }
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false, user: action.payload, error: ""
      }
    case USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false, user: {}, error: action.payload
      }
    default: 
    return state
  }
}