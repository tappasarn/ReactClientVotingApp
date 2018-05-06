import React from 'react';
import { shallow } from 'enzyme';

import { Vote } from './Vote';

describe('Voting', () => {
    it('render a pair of buttons', () => {
        const wrapper = shallow(<Vote pair={['option1', 'option2']}/>);
        expect(wrapper.find('button').length).toBe(2);
    });
    it('should handle click event correctly', () => {
        let voteResult;
        const voteFn = (entry) => voteResult = entry;

        const wrapper = shallow(<Vote pair={['option1', 'option2']} vote={voteFn}/>);
        wrapper.find('button').at(0).simulate('click');
        expect(voteResult).toBe('option1');
    });
    it('disables buttons when user has voted', () => {
        const wrapper = shallow(<Vote pair={['option1', 'option2']} hasVoted="Trainspotting"/>);

        expect(wrapper.props().children[0].props.disabled).toBe(true);
        expect(wrapper.props().children[1].props.disabled).toBe(true);
    });

    it('adds label to the voted entry', () => {
        const wrapper = shallow(<Vote pair={['option1', 'option2']} hasVoted="option1"/>);

        expect(wrapper.props().children[0].props.disabled).toBe(true);
        expect(wrapper.props().children[1].props.disabled).toBe(true);
        expect(wrapper.childAt(0).text()).toBe('option1Voted');
      });
});
