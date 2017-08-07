import {
    REQUEST_MESSAGENUM,
    RECEIVE_MESSAGENUM
}  from '../actions/index';

const message=(state={num:''},action)=>{
  switch (action.type){
      case REQUEST_MESSAGENUM:
          return {...state}
      case RECEIVE_MESSAGENUM:
          return {...state,num:action.num}
      default:
          return state
  }
};

export default message;