import React from 'react';
import { render } from '@testing-library/react';
import 'matchMedia';
import Book from '../..';

test('renders the book page', () => {
  render(<Book />);
});
