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