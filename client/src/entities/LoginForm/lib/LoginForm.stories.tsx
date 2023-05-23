import { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from '..';
import {
  useI18next,
  withRouter,
  withStore,
  withTheme,
} from '../../../shared/lib/storybook/decorators';

const meta: Meta<typeof LoginForm> = {
  title: 'LoginForm',
  component: LoginForm,
  decorators: [withRouter, withTheme, useI18next, withStore],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    title: 'Login',
    linkTo: '/',
    linkText: 'Sign up',
  },
};
