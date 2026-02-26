import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './dropdown-item.js';

const meta: Meta = {
  title: 'Navigation/Dropdown Item',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-dropdown-item>Menu Item</forge-dropdown-item>`,
};
