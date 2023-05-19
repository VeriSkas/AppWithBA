import { Meta, StoryObj } from '@storybook/react';

import { Header } from '..';
import { useI18next, withRouter, withTheme } from '../../../shared/lib/storybook/decorators';

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  decorators: [withTheme, useI18next, withRouter],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
