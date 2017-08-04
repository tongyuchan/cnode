import {
    INPUT_ACCESSTOKEN,
    REQUEST_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../actions/index';



const login=(state={accessToken:'',isFetching:false,error:'',avatar_url:'',id:'',loginname:''},action)=>{
    switch (action.type){
        case INPUT_ACCESSTOKEN:
            return {...state,accessToken:action.accessToken,error:''};
        case REQUEST_LOGIN:
            return {...state,isFetching:true};
        case LOGIN_SUCCESS:
            return {...state,isFetching:false, avatar_url:action.avatar_url,id:action.id,loginname:action.loginname};
        case LOGIN_ERROR:
            return {...state,isFetching:false,error:action.error};
        default:
            return state
    }
};

export default login;