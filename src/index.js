import React from 'react';
import ReactDOM from 'react-dom';
import {Voting} from './components/Voting';

import './index.css';

const pair = ['Trainspotting', '28 Days Later'];

// note hasVoted could easily be a state of Voting component in React
// but with Redux we explicitly want the component to be stateless
ReactDOM.render(
    <Voting pair={pair} hasVoted="Trainspotting"/>,
    document.getElementById('root')
);
