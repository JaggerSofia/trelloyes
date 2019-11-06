import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import store from './store'
import List from './list'

describe('List component', () => {
    it('renders list without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
    });

    // it('renders the UI as expected', () => {
    //     const  tree = renderer
    //         .cre
    // })
})