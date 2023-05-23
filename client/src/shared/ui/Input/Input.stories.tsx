import { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';
import { useI18next, withTheme } from '../../lib/storybook';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  decorators: [withTheme, useI18next],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'email',
  },
};

export const WithError: Story = {
  args: {
    label: 'email',
    type: 'text',
    error: 'This field is required',
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'email',
    type: 'text',
    placeholder: 'enter something',
  },
};
