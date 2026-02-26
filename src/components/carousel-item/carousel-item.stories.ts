import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './carousel-item.js';

const meta: Meta = {
  title: 'Containment/Carousel Item',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-carousel-item><div style="display:flex;align-items:center;justify-content:center;height:200px;background:var(--wa-color-neutral-100)">Carousel Item</div></forge-carousel-item>`,
};
