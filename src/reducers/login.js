import {
    INPUT_ACCESSTOKEN
} from '../actions/index';



const login=(state={accessToken:''},action)=>{
    switch (action.type){
        case INPUT_ACCESSTOKEN:
            return {...state,accessToken:action.accessToken}
        default:
            return state
    }
};

export default login;