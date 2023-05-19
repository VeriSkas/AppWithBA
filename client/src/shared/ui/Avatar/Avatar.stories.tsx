import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '.';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: '/assets/images/userIcon.png',
    alt: 'User',
  },
};
