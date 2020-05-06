import React from 'react';
import renderer from 'react-test-renderer';
import SearchResult from '../components/search-result';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from "react-redux";

const initialState = {}
const mockStore = configureStore();
const store = mockStore(initialState);


describe('Search Result component', () => {
    it('should render snapshot', () => {
        const component = renderer.create(<SearchResult store={store} />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});