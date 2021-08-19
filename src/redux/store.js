import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import appReducer from './app-reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

let reducers = combineReducers({
  app: appReducer
})

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)