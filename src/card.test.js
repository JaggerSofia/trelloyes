import React from  'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './card';
import { isTSAnyKeyword } from '@babel/types';

describe('Card component', () => {
    it('renders without crashing', () => {
        const div= document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})
