import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../components/search';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

const initialState = {}
const mockStore = configureStore();
const store = mockStore(initialState);


describe('Search component', () => {
    it('should render snapshot', () => {
        const component = renderer.create(<Search store={store} />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});

describe('Search component', () => {
    it('should call onChange', () => {
        const component = mount(<Search store={store} />);
        const event = {
            preventDefault() {},
            target: { value: 'test' }
          };
          const input  = component.find('input');
          
          input.simulate('change', event);
          expect(event.target.value).toEqual('test');
    });

});