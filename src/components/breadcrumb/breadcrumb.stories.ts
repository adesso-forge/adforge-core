import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './breadcrumb.js';

const meta: Meta = {
  title: 'Navigation/Breadcrumb',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-breadcrumb><forge-breadcrumb-item>Home</forge-breadcrumb-item><forge-breadcrumb-item>Products</forge-breadcrumb-item><forge-breadcrumb-item>Shoes</forge-breadcrumb-item></forge-breadcrumb>`,
};
