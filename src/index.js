import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { App } from './components/App';
import { VotingContainer } from './components/Voting';
import { ResultsContainer } from './components/Results';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import {setState} from './action_creators';
import io from 'socket.io-client';

import './index.css';

const store = createStore(reducer);

const socket = io(`${window.location.protocol}//${window.location.hostname}:8090`);
socket.on('state', state =>
  store.dispatch(setState(state))
);

const routes = <Route component={App}>
    <Route path="/results" component={ResultsContainer} />
    <Route path="/" component={VotingContainer} />
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('root')
);