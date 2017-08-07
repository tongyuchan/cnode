import {combineReducers} from 'redux';

import homePage from './homePage';
import detailTopic from './detailTopic';
import login from './login';
import person from './person';
import message from './message';

const rootReducer=combineReducers(
    {
        homePage,
        detailTopic,
        login,
        person,
        message
    }
);

export default  rootReducer;