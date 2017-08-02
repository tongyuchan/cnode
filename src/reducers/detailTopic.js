import {
    REQUEST_DETAILTOPIC,
    RECEIVE_DETAILTOPIC,
    CLEAR_DETAILTOPIC
} from '../actions/index';

const detaiTopic=(state={data:{},isFetching:false},action)=>{
    switch (action.type){
        case REQUEST_DETAILTOPIC:
            return {data:{},isFetching:true};
        case RECEIVE_DETAILTOPIC:
            return {data:action.data,isFetching:false};
        case CLEAR_DETAILTOPIC:
            return {data:{},isFetching:false};
        default:
            return {...state}
    }
};

export default detaiTopic;