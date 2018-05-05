import React from 'react';
import { shallow } from 'enzyme';

import { Voting } from './Voting';

describe('Voting', () => {
    it('render a pair of buttons', () => {
        const wrapper = shallow(<Voting pair={['option1', 'option2']}/>);
        expect(wrapper.find('button').length).toBe(2);
    });
    it('should handle click event correctly', () => {
        let voteResult;
        const voteFn = (entry) => voteResult = entry;

        const wrapper = shallow(<Voting pair={['option1', 'option2']} vote={voteFn}/>);
        wrapper.find('button').at(0).simulate('click');
        expect(voteResult).toBe('option1');
    })
});
