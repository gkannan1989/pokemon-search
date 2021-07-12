import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import PokemonList from '../pokemonList';

test('renders pokemon list of suggestion', () => {
  render(
    <BrowserRouter>
      <PokemonList
        pokemons={[
          { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        ]}
      />
    </BrowserRouter>,
  );
  const pokemonItem = screen.getByText(/bulbasaur/i);
  expect(pokemonItem).toBeInTheDocument();
});
