import React from 'react';
import renderer from 'react-test-renderer';
import SearchHeader from '../components/search-header';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from "react-redux";

const initialState = {}
const mockStore = configureStore();
const store = mockStore(initialState);


describe('Search Header component', () => {
    it('should render snapshot', () => {
        const component = renderer.create(<Provider store={store}><SearchHeader /></Provider>);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});