import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './option.js';

const meta: Meta = {
  title: 'Utility/Option',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-option value="1">Option Label</forge-option>`,
};
