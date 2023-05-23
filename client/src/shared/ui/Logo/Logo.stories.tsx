import { Meta, StoryObj } from '@storybook/react';

import { Logo } from '.';
import { withRouter } from '../../lib/storybook';
import '../../../app/styles/index.scss';

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1e1e1e' }],
    },
  },
  decorators: [withRouter],
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    img: '/assets/images/logo.png',
    alt: 'Logo',
    text: 'Logo',
  },
};
