import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import DetailPage from '../detailPage';

test('renders pokemon lists loading mask', () => {
  const { container } = render(
    <BrowserRouter>
      <DetailPage />
    </BrowserRouter>,
  );
  const loadingEl = container.querySelector('img');
  expect(loadingEl).toBeInTheDocument();
});
