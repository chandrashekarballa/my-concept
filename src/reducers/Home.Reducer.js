import * as ACTION_TYPE from '../actions/action-types';
const initialState={
     stage: "Intial"
}
const ReducerHomeFetchExample = (state = initialState, action)=>{
 switch(action.type){
    case ACTION_TYPE.Home_Fetch_Exampledata_REQUEST:
        return Object.assign({}, state,{
           stage: "request"
        });

    case ACTION_TYPE.Home_Fetch_Exampledata_SUCCESS:
        return Object.assign({}, state,{
            stage: "success",
            data: action.payload
        
        },console.log("reducer",action.payload));

    case ACTION_TYPE.Home_Fetch_Exampledata_FAILURE:
        return Object.assign({}, state,{
            stage: "failure"

        });
        default:
            return state;
   }
 
};
export default ReducerHomeFetchExample;