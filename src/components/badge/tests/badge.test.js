import { render, screen } from '@testing-library/react';

import Badge from '../badge';

test('renders type name specific color', () => {
  render(<Badge name="ground" />);
  expect(screen.getByText(/ground/i)).toHaveStyle(
    'background-color: rgb(247, 222, 63);',
  );
});
