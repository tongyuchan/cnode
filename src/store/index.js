import {createstore,applyMiddleware,compose} from 'redux';  //compose 从右到左来组合多个函数
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';

export default createstore(reducer,applyMiddleware(thunk,createLogger()));