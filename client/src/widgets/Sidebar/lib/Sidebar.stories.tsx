import { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '..';
import { useI18next, withRouter, withStore, withTheme } from '../../../shared/lib/storybook';

const meta: Meta<typeof Sidebar> = {
  title: 'Sidebar',
  component: Sidebar,
  decorators: [withRouter, withTheme, useI18next, withStore],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
