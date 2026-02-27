import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './tooltip.js';

const meta: Meta = {
  title: 'Feedback/Tooltip',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-tooltip content="Tooltip text"
      ><forge-button slot="content">Hover me</forge-button></forge-tooltip
    >`,
};
