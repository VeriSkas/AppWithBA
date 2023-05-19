import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Logo } from './Logo';

test('Render logo', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Logo />
    </MemoryRouter>
  );

  expect(getByText(/TextContent.logo/i)).toBeInTheDocument();
});
