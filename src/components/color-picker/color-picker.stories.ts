import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './color-picker.js';

const meta: Meta = {
  title: 'Input/Color Picker',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-color-picker label="Color"></forge-color-picker>`,
};
