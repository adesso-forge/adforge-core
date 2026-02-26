import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './tree-item.js';

const meta: Meta = {
  title: 'Navigation/Tree Item',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-tree-item>Tree Item</forge-tree-item>`,
};
