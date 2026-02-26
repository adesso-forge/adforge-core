import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './details.js';

const meta: Meta = {
  title: 'Containment/Details',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-details><span slot="summary">Click to expand</span>This is the details content that was hidden.</forge-details>`,
};
