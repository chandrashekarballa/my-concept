import * as ACTION_TYPE from './action-types';
import axios from 'axios';

export const homeFetchExampledata_request = () => {
  return {
    type: ACTION_TYPE.Home_Fetch_Exampledata_REQUEST
  }
}
export const homeFetchExampledata_success = (data) => {
  return {
    type: ACTION_TYPE.Home_Fetch_Exampledata_SUCCESS,
    payload: data
  }

}
export const homeFetchExampledata_failure = (error) => {
  return {
    type: ACTION_TYPE.Home_Fetch_Exampledata_FAILURE,
    payload: error
  }
}
export default function homeFetchExampledata(data) {

return (dispatch) =>{
      dispatch(homeFetchExampledata_request());
      axios({
        url : "http://localhost:9000/results",
        method: "post",
       data: JSON.stringify(data),

      })
}

}