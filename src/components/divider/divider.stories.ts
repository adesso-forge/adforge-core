import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './divider.js';

const meta: Meta = {
  title: 'Layout/Divider',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-divider></forge-divider>`,
};
