import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './tree.js';

const meta: Meta = {
  title: 'Navigation/Tree',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-tree><forge-tree-item>Item 1<forge-tree-item>Nested 1</forge-tree-item></forge-tree-item><forge-tree-item>Item 2</forge-tree-item></forge-tree>`,
};
