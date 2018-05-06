import React from 'react';
import { Winner } from './Winner';
import { Vote } from './Vote';
import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';

export const Voting = (props) => {
    return (
        <div>
            {props.winner ?
                <Winner winner={props.winner} /> :
                <Vote {...props} />}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        pair: state.getIn(['vote', 'pair']),
        hasVoted: state.get('hasVoted'),
        winner: state.get('winner')
    };
}
Voting.displayName = 'Voting';

// HOC !
// Voting Component stay pure and we wrap it with external logic
const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);
export {VotingContainer};
