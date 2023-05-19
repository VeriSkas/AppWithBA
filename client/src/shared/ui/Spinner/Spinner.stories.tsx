import { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '.';
import { withTheme } from '../../lib/storybook/decorators';

const meta: Meta<typeof Spinner> = {
  title: 'Spinner',
  component: Spinner,
  decorators: [withTheme],
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};
