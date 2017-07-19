import 'babel-polyfill';    //This will emulate a full ES6 environment
import React from 'react';
import { render } from 'react-dom';
import store from './store';
import {Provider} from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';      //using onTouchTap
injectTapEventPlugin();

import {React} from 'react';
import {HashRouter,Route,IndexRoute} from 'react-router-dom';

import HomePage from './containers/HomePage';

render(
  <Provider store={store}>
      <HashRouter>
            <Route>
                <IndexRoute component={HomePage}/>
            </Route>
      </HashRouter>
  </Provider>,
    document.getElementById('root')
);
