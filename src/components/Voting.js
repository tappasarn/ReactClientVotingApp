import React from 'react';
import {Winner} from './Winner';
import {Vote} from './Vote';

export const Voting = (props) => {
    return (
        <div>
            {props.winner ?
                <Winner winner={props.winner} /> :
                <Vote {...props} />}
        </div>
    );
};

Voting.displayName = 'Voting';