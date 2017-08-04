import {combineReducers} from 'redux';

import homePage from './homePage';
import detailTopic from './detailTopic';
import login from './login';

const rootReducer=combineReducers(
    {
        homePage,
        detailTopic,
        login
    }
);

export default  rootReducer;