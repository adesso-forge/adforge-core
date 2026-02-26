import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './resize-observer.js';

const meta: Meta = {
  title: 'Layout/Resize Observer',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-resize-observer><div style="overflow:auto;resize:both;border:2px dashed var(--wa-color-neutral-300);padding:1rem;min-width:100px;min-height:100px">Resize me</div></forge-resize-observer>`,
};
