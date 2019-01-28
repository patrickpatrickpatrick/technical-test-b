import React from 'react';
import { mount } from 'enzyme';
import { RoomsPage } from './index.js';
import Loading from './../../components/loading';
import ResultsGrid from './../../components/resultsGrid';

describe('Rooms Page', () => {
  it('should render only loading component if loading', () => {
    const component = mount(<RoomsPage loading={true} />);
    expect(component.find(Loading).length).toBe(1);
    expect(component.find(ResultsGrid).length).toBe(0);
  });

  it('should render only page component if not loading', () => {
    const component = mount(<RoomsPage loading={false} />);
    expect(component.find(ResultsGrid).length).toBe(1);
    expect(component.find(Loading).length).toBe(0);
  });
});