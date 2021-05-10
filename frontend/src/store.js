import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { userReducers } from "./redux/reducers/userReducers"
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk]

const rootReducers = combineReducers({
  userInfo: userReducers,
})
const userFromLocalStorage = localStorage.getItem("userInfo") 
  ? JSON.parse(localStorage.getItem("userInfo")) 
  : null

const initialState = {
  userInfo: {user: userFromLocalStorage, loginSuccess: false, registerSuccess: false }
}

const store = createStore(rootReducers, initialState,  composeWithDevTools(applyMiddleware(...middleware)))

export default store