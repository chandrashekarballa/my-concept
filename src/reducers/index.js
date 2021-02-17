import {combineReducers } from 'redux';
import ReducerHomeFetchExample from '../reducers/Home.Reducer'
import LoginAuthenticationcheck from '../reducers/Login.Reducer'
const rootReducer = combineReducers({
   mainfetch: ReducerHomeFetchExample,
  logindetails: LoginAuthenticationcheck


})
export default rootReducer;