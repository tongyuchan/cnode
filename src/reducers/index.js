import {combineReducers} from 'redux';

import homePage from './homePage';
import detailTopic from './detailTopic';

const rootReducer=combineReducers(
    {
        homePage,
        detailTopic
    }
);

export default  rootReducer;