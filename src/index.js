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


render(
  <Provider store={store}>
      <HashRouter>
           <div>
               <Route path="/" exact component={HomePage}/>
               <Route path="/topic/:id" component={DetailTopic}/>
               <Route path="/login" component={Login}/>
           </div>
      </HashRouter>
  </Provider>,
    document.getElementById('root')
);


// c7c35468-a78b-4097-8bb1-a2a0adf99676