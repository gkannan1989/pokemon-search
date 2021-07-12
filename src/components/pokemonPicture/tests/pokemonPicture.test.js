import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Picture from '../pokemonPicture';

test('renders pokemon list of suggestion', () => {
  const { container } = render(
    <BrowserRouter>
      <Picture id={1} />
    </BrowserRouter>,
  );
  const pokemonPicElm = container.querySelector('.pokemon-picture');
  expect(pokemonPicElm).toBeInTheDocument();
});
