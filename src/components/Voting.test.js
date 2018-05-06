import React from 'react';
import { shallow } from 'enzyme';

import { Voting } from './Voting';

describe('Voting', () => {
    it('should render winner', () => {
        const wrapper = shallow(<Voting winner='option1'/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render Vote', () => {
        const wrapper = shallow(<Voting/>);
        expect(wrapper).toMatchSnapshot();
    });
});
