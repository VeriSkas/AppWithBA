import React from 'react';
import { render } from '@testing-library/react';

import { Input } from './Input';

describe('Input component', () => {
  it('Renders with "name" label', () => {
    const { queryByLabelText } = render(<Input label="Name" />);

    expect(queryByLabelText(/name/i)).toBeTruthy();
    expect(queryByLabelText(/fullname/i)).toBeFalsy();
  });

  it('Renders component correctly', () => {
    const { queryByPlaceholderText } = render(
      <Input label="Email" type="email" placeholder="Enter your email" />
    );

    expect(queryByPlaceholderText(/enter your email/i)).toBeInTheDocument();
  });

  it('Renders error message when error prop is passed', () => {
    const { queryByText } = render(
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        error="This field is required"
        register={{ name: 'password', rules: { required: true } }}
      />
    );

    expect(queryByText('InputErrorMessages.This field is required')).toBeInTheDocument();
  });
});
