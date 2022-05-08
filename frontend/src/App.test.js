import { render, screen } from '@testing-library/react';
import Dummy from './dummy'
import React from "react";

test('checkExplore', () => {
  const{getByTestId} = render(<Dummy/>);
  
  const temp = getByTestId('test');

  expect(temp.textContent).toBe('dummy');
});
