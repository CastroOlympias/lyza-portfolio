import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from'..';
const { asFragment } =render(<About />);


describe('About component', () => {
    // baseline test
    it('renders', () => {
        render(<About />);
    });

    // snapshot test
    test('matches snapshot DOM node structure', () => {
        expect(asFragment()).toMatchSnapshot();
    })
})

afterEach(cleanup);