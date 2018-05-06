import React from 'react';
import { List, Map } from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({ 'Trainspotting': 5, '28 Days Later': 4 });

export const App = (props) => {
    return React.cloneElement(props.children);
} 
