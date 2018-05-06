import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import App from './components/App';
import { Voting } from './components/Voting';

import './index.css';

const pair = ['Trainspotting', '28 Days Later'];

const routes = <Route component={App}>
    <Route path="/" component={Voting} />
</Route>;

// note hasVoted could easily be a state of Voting component in React
// but with Redux we explicitly want the component to be stateless
ReactDOM.render(
    <Voting
        pair={pair}
        hasVoted="Trainspotting"
        winner="Trainspotting"
    />,
    document.getElementById('root')
);
