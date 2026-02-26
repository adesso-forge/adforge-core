import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './qr-code.js';

const meta: Meta = {
  title: 'Data Display/Qr Code',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-qr-code value="https://webawesome.com"></forge-qr-code>`,
};
