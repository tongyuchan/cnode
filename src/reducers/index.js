import {combineReducers} from 'redux';

import homePage from './homePage';
import detailTopic from './detailTopic';
import login from './login';
import person from './person';

const rootReducer=combineReducers(
    {
        homePage,
        detailTopic,
        login,
        person
    }
);

export default  rootReducer;