import React from 'react';
import {Winner} from './Winner';
import {connect} from 'react-redux';


export const Results = (props) => {
    const getPair = () => {
        return this.props.pair || [];
    };
    const getVotes = (entry) => {
        if (this.props.tally && this.props.tally.has(entry)) {
            return this.props.tally.get(entry);
        }
        return 0;
    };
    return (
        this.props.winner ?
            <Winner ref="winner" winner={this.props.winner} /> :
            <div className="results">
                <div className="tally">
                    {getPair().map(entry =>
                        <div key={entry} className="entry">
                            <h1>{entry}</h1>
                            <div className="voteCount">
                                {getVotes(entry)}
                            </div>
                        </div>
                    )}
                </div>
                <div className="management">
                    <button
                        className="next"
                        onClick={props.next}>
                        Next
                </button>
                </div>
            </div>
    );
};

Results.displayName = 'Results';

const mapStateToProps = (state) => {
    return {
      pair: state.getIn(['vote', 'pair']),
      tally: state.getIn(['vote', 'tally']),
      winner: state.get('winner')
    }
}

export const ResultsContainer = connect(mapStateToProps)(Results);