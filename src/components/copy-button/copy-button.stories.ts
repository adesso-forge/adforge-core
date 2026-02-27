import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './copy-button.js';

const meta: Meta = {
  title: 'Action/Copy Button',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<forge-copy-button value="Text to copy"></forge-copy-button>`,
};
