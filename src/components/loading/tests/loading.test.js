import { render, screen } from '@testing-library/react';

import Loading from '../loading';

test('renders loading pokemon image', () => {
  const { container } = render(<Loading />);
  const loadingEl = container.querySelector('img');
  expect(loadingEl).toBeInTheDocument();
});
