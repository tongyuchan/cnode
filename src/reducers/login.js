import {
    INPUT_ACCESSTOKEN,
    REQUEST_LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_EXIT
} from '../actions/index';



const login=(state={accessToken:window.localStorage.getItem('cnodeA')|| '',isFetching:false,error:'',avatar_url:'',id:'',loginname:window.localStorage.getItem('cnodeL')||''},action)=>{
    switch (action.type){
        case INPUT_ACCESSTOKEN:
            return {...state,accessToken:action.accessToken,error:''};
        case REQUEST_LOGIN:
            return {...state,isFetching:true};
        case LOGIN_SUCCESS:
            return {...state,isFetching:false, avatar_url:action.avatar_url,id:action.id,loginname:action.loginname};
        case LOGIN_ERROR:
            return {...state,isFetching:false,error:action.error};
        case LOGIN_EXIT:
            return {...state,accessToken:'',loginname:'',avatar_url:'',id:'',error:''};
        default:
            return state
    }
};

export default login;