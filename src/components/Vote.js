import React from 'react';

export const Vote = (props) => {
    const getPair = () => {
        return props.pair || [];
    }

    const verifyDisabled = () => {
        return !!props.hasVoted;
    }

    const hasVotedFor = () => {
        return props.hasVoted === entry;
    };

    return (
        <div className="vote">
            {
                getPair().map(entry =>
                    <button key={entry}
                        disabled={verifyDisabled()}
                        onClick={() => props.vote(entry)}>
                        <h1>{entry}</h1>
                        {hasVotedFor(entry) ?
                            <div className="label">Voted</div> :
                            null}
                    </button>
                )
            }
        </div>
    );
}