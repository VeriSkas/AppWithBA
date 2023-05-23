import { Meta, StoryObj } from '@storybook/react';

import { UserCard } from '../ui';
import { withLimitWidth, withRouter, withStore, withTheme } from '../../../shared/lib/storybook';

const meta: Meta<typeof UserCard> = {
  title: 'UserCard',
  component: UserCard,
  decorators: [withLimitWidth, withRouter, withTheme, withStore],
};

export default meta;

type Story = StoryObj<typeof UserCard>;

export const Default: Story = {};
