import React from 'react';

export const Voting = (props) => {
    const getPair = () => {
        return props.pair || [];
    }

    return (
        <div className="voting">
            {getPair().map(entry =>
                <button key={entry}
                    onClick={() => props.vote(entry)}>
                    <h1>{entry}</h1>
                </button>
            )}
        </div>
    );
}