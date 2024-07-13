// Modules
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// Component
import Nav from './Nav';

const meta = {
  title: 'Test Nav',
  component: Nav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Nav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};