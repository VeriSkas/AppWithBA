import { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from '..';
import { withTheme } from '../../../shared/lib/storybook';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'ThemeSwitcher',
  component: ThemeSwitcher,
  decorators: [withTheme],
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {};
