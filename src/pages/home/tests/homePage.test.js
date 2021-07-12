import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import HomePage from '../homePage';

test('renders home page loading mask', () => {
  const { container } = render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>,
  );
  const loadingEl = container.querySelector('img');
  expect(loadingEl).toBeInTheDocument();
});
