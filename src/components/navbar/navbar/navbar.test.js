import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../navbar.component';

test('renders navbar', () => {
  const { container } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const navBarEl = container.querySelector('img');
  expect(navBarEl).toBeInTheDocument();
});
