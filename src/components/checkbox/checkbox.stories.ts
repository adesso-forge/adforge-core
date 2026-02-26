import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './checkbox.js';

const meta: Meta = {
  title: 'Input/Checkbox',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-checkbox>Check me</forge-checkbox>`,
};
