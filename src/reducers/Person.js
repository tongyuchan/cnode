import {
    REQUEST_PERSON,
    RECEIVE_PERSON,
    REQUEST_COLLECT,
    RECEIVE_COLLECT
}from '../actions/index';

const person=(state={isFetching:false,user:{},collect:{}},action)=>{
    switch (action.type){
        case REQUEST_PERSON:
            return {...state,isFetching:true};
        case RECEIVE_PERSON:
            return {...state,isFetching:false,user:action.user};
        case REQUEST_COLLECT:
            return {...state,isFetching:true};
        case RECEIVE_COLLECT:
            return {...state,isFetching:false,collect:action.collect};
        default:
            return state;
    }

};

export default person;