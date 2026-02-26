import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './breadcrumb-item.js';

const meta: Meta = {
  title: 'Navigation/Breadcrumb Item',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-breadcrumb-item>Item</forge-breadcrumb-item>`,
};
