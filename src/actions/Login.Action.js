import * as ACTION_TYPE from './action-types';
import axios from 'axios';

export const loginCheck_request = () => {
  return {
    type: ACTION_TYPE.LoginCheck_REQUEST
  }
}
export const loginCheck_success = (loginid,password) => {
  return {
    type: ACTION_TYPE.LoginCheck_SUCCESS,
    payload: {loginid,password}
  }

}
export const loginCheck_failure = (error) => {
  return {
    type: ACTION_TYPE.LoginCheck_FAILURE,
    payload: error
  }
}
export default function loginCheck(loginid,password) {
  
return(dispatch) => {

  
    dispatch(loginCheck_success(loginid,password));
  
}
  }