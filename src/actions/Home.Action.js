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
  
return(dispatch) => {
  const  Url = "http://localhost:9000/results";
  const response =  fetch(Url)
  .then(res =>{
      return res.json();
  })
  .then(data =>{
  dispatch(homeFetchExampledata_success(data));
  })
}
 


  
/* return (dispatch) =>{
  dispatch(homeFetchExampledata_request());
      axios({
        url : "http://localhost:9000/results",
        method: "post",
       data: JSON.stringify(data),

      },console.log("checking",data))
      
      .then((response)=>{
        if(response.status === 200){
          let data = response.data
          dispatch(homeFetchExampledata_success(data));
        }
        else{
          dispatch(homeFetchExampledata_failure("Sorry cannot load API"));
        }
        
      }) */
   

/* } */

}