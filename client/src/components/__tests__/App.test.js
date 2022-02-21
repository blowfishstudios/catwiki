
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
// import { render, screen } from '@testing-library/react';
import App from '../../App';


// Declare empty container as target for all our components during testing
let container = null;

// Render the React tree to a DOM element that is attached to watch events
beforeEach(() => {
  // Setup a DOM element as the target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // Cleanup on exiting to prevent this test from altering the results of future tests
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


// a different way to test for "Loading..." to the alternative provided in code sample.
it('renders loading placeholder', () => {
  act (() => {
  render(<App />, container);
  });
  
  expect(container.textContent).toBe("Loading...");

});
