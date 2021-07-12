import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Favourites from '../favourites';

test('renders favorite pokemon blocks', () => {
  render(
    <BrowserRouter>
      <Favourites items={{ id: 2, name: 'test' }} removeFav={() => {}} />
    </BrowserRouter>,
  );
  const favItemElement = screen.getByText(/test/i);
  expect(favItemElement).toBeInTheDocument();
});
