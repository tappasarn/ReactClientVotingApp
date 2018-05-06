import React from 'react';
import { shallow } from 'enzyme';

import { Winner } from './Winner';

describe('Winner', () => {
    it('should render winner correctly', () => {
        const wrapper = shallow(<Winner winner='option1'/>);
        expect(wrapper).toMatchSnapshot();
    });
});