import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { userReducers } from "./redux/reducers/userReducers"
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk]

const rootReducers = combineReducers({
  userInfo: userReducers
})

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleware)))

export default store