import { Meta, StoryObj } from '@storybook/react';

import { LocalizeSwitcher } from '..';
import { withTheme } from '../../../shared/lib/storybook/decorators';

const meta: Meta<typeof LocalizeSwitcher> = {
  title: 'LocalizeSwitcher',
  component: LocalizeSwitcher,
  decorators: [withTheme],
};

export default meta;

type Story = StoryObj<typeof LocalizeSwitcher>;

export const Default: Story = {};
