import {
    SELECT_TAB,
    REQUEST_TOPICS,
    RECEIVE_TOPICS
} from '../actions/index'


const selectedTab=(state,action)=>{
    switch (action.type){
        case SELECT_TAB:
            return action.tab;
        default:
            return state;
    }
};

function tabDataItem(state={isFetching:false,page:0,topics:[]},action){
    switch (action.type){
        case REQUEST_TOPICS:
            return {
                ...state,
                isFetching:true
            };
        case RECEIVE_TOPICS:
            if(state.page<action.page){
                let topics=state.topics;
                action.topics=topics.concat(action.topics);
            }
            return {
                ...state,
                isFetching:false,
                page:action.page,
                topics:action.topics,
                limit:action.limit
            };
        default:
            return state
    }
}

const tabData=(state={},action)=>{
    switch (action.type){
        case RECEIVE_TOPICS:
        case REQUEST_TOPICS:
            return {
                ...state,
                [action.tab]:tabDataItem(state[action.tab],action)
            }
        default:
            return state;
    }
};

const homePage=(state={selectedTab:'all',tabData:{}},action)=>{
    const sTab=selectedTab(state.selectedTab,action);
    const tData=tabData(state.tabData,action);
    return {...state,selectedTab:sTab,tabData:tData};
};

export default homePage;