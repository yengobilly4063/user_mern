import { 
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,
 } from "../types/userTypes"

const initialState = {
  loading: false,
  success: false,
  user: {},
  error: ""
}

export const userReducers = (state = initialState, action) =>  {
  console.log(action.type);
  switch(action.type){
    // Reegister User
    case USER_REGISTER_REQUEST: 
      return {
        ...state, 
        loading: true, registerSuccess: false, user: {}, error: ""
      }
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false, registerSuccess: true,  user: action.payload, error: ""
      }
    case USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false, registerSuccess: false, user: {}, error: action.payload
      }

      // LOGIN User
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true, loginSuccess: false, user: {}, error: ""
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false, loginSuccess: true, user: action.payload
      }
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false, loginSuccess: false, user: {}, error: action.payload
      }

      // LOGOUT User
    case USER_LOGOUT_REQUEST:
      {
        return {
          ...state,
          loading: true,
          logoutSuccess: false
        }
      }
    case USER_LOGOUT_SUCCESS:
      {
        return {
          ...state,
          loading: false,
          logoutSuccess: true,
        }
      }
      case USER_LOGOUT_FAIL:
        {
          return {
            ...state,
            loading: false,
            logoutSuccess: false
          }
        }
    default: 
      return state
  }
}