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

//Login
export const INPUT_ACCESSTOKEN='INPUT_ACCESSTOKEN';
export const REQUEST_LOGIN='REQUEST_LOGIN';
export const LOGIN_SUCCESS='LOGIN_SUCCESS';
export const LOGIN_ERROR='LOGIN_ERROR';

export const inputAccessToken=(value)=>({
    type:INPUT_ACCESSTOKEN,
    accessToken:value
});

const requestLogin=()=>({
   type:REQUEST_LOGIN
});

const loginSuccess=(avatar_url,id,loginname)=>({
    type:LOGIN_SUCCESS,
    avatar_url,
    id,
    loginname
});

const loginError=(error)=>({
    type:LOGIN_ERROR,
    error
});

export const fetchLogin=(accessToken)=>(dispatch,getState)=>{
   dispatch(requestLogin());
   fetch(`https://cnodejs.org/api/v1/accesstoken`,{
       method:'POST',
       headers: {
           "Content-Type": "application/x-www-form-urlencoded"
       },
       body: `accesstoken=${accessToken}`})
   .then(response=>response.json())
   .then(json=>{
       if(json.success){
           dispatch(loginSuccess(json.avatar_url,json.id,json.loginname));
       }else{
            dispatch(loginError(json.error_msg));
       }
   });
};
