import fetch from 'isomorphic-fetch';   //This adds fetch as a global so that its API is consistent between client and server.

export const SELECT_TAB='SELECT_TAB';
export const REQUEST_TOPICS='REQUEST_TOPICS';
export const RECEIVE_TOPICS='RECEIVE_TOPIC';

//HomePage
export const selectTab=tab=>({
    type:SELECT_TAB,
    tab
});

const requestTopics=tab=>({
    type:REQUEST_TOPICS,
    tab
});
const receiveTopics=(tab,topics,page,limit)=>({
    type:RECEIVE_TOPICS,
    tab,
    topics,
    page,
    limit
});

export const fetchTopics=(tab,page=1,limit=20)=>(dispatch)=>{
    dispatch(requestTopics(tab));
    fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`)
    .then(response=>response.json())
    .then(json=>dispatch(receiveTopics(tab,json.data,page,limit)))
};


//DetailTopic
export const REQUEST_DETAILTOPIC='REQUEST_DETAILTOPIC';
export const RECEIVE_DETAILTOPIC='RECEIVE_DETAILTOPIC';
export const CLEAR_DETAILTOPIC='CLEAR_DETAILTOPIC';

const requestDetailTopic=()=>({
    type:REQUEST_DETAILTOPIC
});
const receiveDetailTopic=(data)=>({
    type:RECEIVE_DETAILTOPIC,
    data
});

export const fetchDetailTopic=(id)=>(dispatch)=>{
    dispatch(requestDetailTopic(id));
    fetch(`https://cnodejs.org/api/v1/topic/${id}`)
    .then(response=>response.json())
    .then(json=>dispatch(receiveDetailTopic(json.data)))
};

export const clearDetailTopic=()=>({
   type:CLEAR_DETAILTOPIC
});