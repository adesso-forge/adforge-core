import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './number-input.js';

const meta: Meta = {
  title: 'Input/Number Input',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<forge-number-input label="Quantity" value="5"></forge-number-input>`,
};
