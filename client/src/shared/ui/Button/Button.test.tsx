import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button component', () => {
  it('renders component correctly', () => {
    const { getByRole } = render(<Button color="secondary">Click me</Button>);

    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('button')).toHaveClass('secondary');
  });

  test('click handler is called when the button is clicked', async () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleClick}>Click me</Button>);

    expect(handleClick).toHaveBeenCalledTimes(0);
    await userEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is passed', () => {
    const { getByRole } = render(<Button disabled>Click me</Button>);

    expect(getByRole('button')).toBeDisabled();
  });
});
