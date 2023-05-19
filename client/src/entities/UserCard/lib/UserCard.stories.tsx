import { Meta, StoryObj } from '@storybook/react';

import { UserCard } from '../ui';
import { withLimitWidth, withRouter, withTheme } from '../../../shared/lib/storybook/decorators';

const meta: Meta<typeof UserCard> = {
  title: 'UserCard',
  component: UserCard,
  decorators: [withLimitWidth, withRouter, withTheme],
};

export default meta;

type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
  args: {
    user: {
      id: 1,
      email: 'user@mail.ru',
      name: 'User',
      photo: '/assets/images/userIcon.png',
    },
  },
};
