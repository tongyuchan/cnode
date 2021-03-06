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
export const LOGIN_EXIT='LOGIN_EXIT';

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

export const loginExit=()=>({
   type:LOGIN_EXIT
});

//Person
export const REQUEST_PERSON='REQUEST_PERSON';
export const RECEIVE_PERSON='RECEIVE_PERSON';
export const REQUEST_COLLECT='REQUEST_COLLEST';
export const RECEIVE_COLLECT='RECEIVE_COLLECT';

const requestPerson=()=>({
    type:REQUEST_PERSON
});

const receivePerson=(data)=>({
    type:RECEIVE_PERSON,
    user:data
});

export const fetchPerson=()=>(dispatch,getState)=>{
    const loginname=getState().login.loginname;
    dispatch(requestPerson());
    fetch(`https://cnodejs.org/api/v1/user/${loginname}`)
    .then(response=>response.json())
    .then(json=>dispatch(receivePerson(json.data)))
};

const requestCollect=()=>({
    type:REQUEST_COLLECT
});

const receiveCollect=(data)=>({
    type:RECEIVE_COLLECT,
    collect:data
});

export const fetchCollect=()=>(dispatch,getState)=>{
    const loginname=getState().login.loginname;
    dispatch(requestPerson());
    fetch(`https://cnodejs.org/api/v1/topic_collect/${loginname}`)
    .then(response=>response.json())
    .then(json=>dispatch(receiveCollect(json.data)))
};

//Message
export const REQUEST_MESSAGENUM='REQUEST_MESSAGENUM';
export const RECEIVE_MESSAGENUM='RECEIVE_MESSAGENUM';

const requestMessageNum=()=>({
   type:REQUEST_MESSAGENUM
});

const receiveMessageNum=(num)=>({
    type:RECEIVE_MESSAGENUM,
    num
});

export const fetchMessageNum=()=>(dispatch,getState)=>{
    const accessToken=getState().login.accessToken;
    dispatch(requestMessageNum());
    fetch(`https://cnodejs.org/api/v1/message/count?accesstoken=${accessToken}`)
    .then(response=>response.json())
    .then(json=>dispatch(receiveMessageNum(json.data)));
};