import React from 'react';

export const Winner = (props) => {
    return (
        <div className="winner">
            Winner is {props.winner}!
        </div>
    );
}

Winner.displayName = 'Winner';