import 'babel-polyfill';    //This will emulate a full ES6 environment
import React from 'react';
import { render } from 'react-dom';
import store from './store';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';      //using onTouchTap
injectTapEventPlugin();

import './scss/index.scss';

import {HashRouter,Route} from 'react-router-dom';

import HomePage from './containers/HomePage';
import DetailTopic from './containers/DetailTopic';
import Login from './containers/Login';
import Person from './containers/Person';
import TopicList from './containers/TopicList'

render(
  <Provider store={store}>
      <HashRouter>
           <div>
               <Route path="/" exact component={HomePage}/>
               <Route path="/topic/:id" component={DetailTopic}/>
               <Route path="/login" component={Login}/>
               <Route path="/person" component={Person}/>
               <Route path="/topicList/:id" component={TopicList}/>
           </div>
      </HashRouter>
  </Provider>,
    document.getElementById('root')
);


