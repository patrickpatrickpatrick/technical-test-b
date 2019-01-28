import React from 'react';
import { mount } from 'enzyme';
import {
    CollapsedAvatarGrid,
    hoverAction,
 } from './index.js';
import {
    compose,
} from 'recompose';

describe('Avatar Grid', () => {
    it('should set hover padding when hovered over and when mouse leaves', () => {
        const ComposeComponent = compose(
            hoverAction
        )(
            CollapsedAvatarGrid
        ); 

        const component = mount(<ComposeComponent />) ;

        component.simulate('mouseenter');

        expect(component.state().stateValue).not.toBe('0px');

        component.simulate('mouseleave');

        expect(component.state().stateValue).toBe('0px');
    });
});