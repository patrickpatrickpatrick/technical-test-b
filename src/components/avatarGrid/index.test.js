import React from 'react';
import { mount } from 'enzyme';
import {
    AvatarGrid,
    expandedAction,
 } from './index.js';
import ExpandedAvatarGrid from './expandedAvatarGrid';
import CollapsedAvatarGrid from './collapsedAvatarGrid';
import {
    compose,
} from 'recompose';

describe('Avatar Grid', () => {
    it('should set collapsed to true when hovered over', () => {
        const ComposeComponent = compose(
            expandedAction
        )(
            AvatarGrid
        ); 

        const component = mount(<ComposeComponent />) ;

        component.simulate('click');

        expect(component.state().stateValue).toEqual(true);
    });

    it('should render collapsed avatar grid if not expanded', () => {
        const component = mount(<AvatarGrid expanded={false} />);
        expect(component.find(CollapsedAvatarGrid).length).toBeTruthy();
    });

    it('should render expanded avatar grid if expanded', () => {
        const component = mount(<AvatarGrid loading={true} />);
        expect(component.find(ExpandedAvatarGrid).length).toBeTruthy();
    });
});