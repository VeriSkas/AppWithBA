import { Meta, StoryObj } from '@storybook/react';

import { Backdrop } from '.';

const meta: Meta<typeof Backdrop> = {
  title: 'Backdrop',
  component: Backdrop,
};

export default meta;

type Story = StoryObj<typeof Backdrop>;

export const Default: Story = {};
