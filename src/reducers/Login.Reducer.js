import * as ACTION_TYPE from '../actions/action-types';



var logindata = {
     loginid: "RamaChandra",
     password: "Hanuman"

};

const initialState={
     stage: "Intial",
     Spinner : false,
     LoginSuccessfull: false,
     logindata :[]
}
const LoginAuthenticationcheck= (state = initialState, action)=>{
 switch(action.type){
    case ACTION_TYPE.LoginCheck_REQUEST:
        return Object.assign({}, state,{
           stage: "request",
           Spinner: true,
        });

    case ACTION_TYPE.LoginCheck_SUCCESS:
        return Object.assign({}, state,{
            stage: "success",
            Spinner: false,
            LoginSuccessfull: true,
            data: action.payload
        
        },console.log("login check reducer",action.payload));
      
   /*   logindata =   logindata.some((logindata)=>{ logindata == action.payload }) */

    case ACTION_TYPE.LoginCheck_FAILURE:
        return Object.assign({}, state,{
            stage: "failure"

        });
        default:
            return state;
   }
 
};
export default LoginAuthenticationcheck;