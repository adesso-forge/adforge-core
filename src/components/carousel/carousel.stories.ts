import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './carousel.js';

const meta: Meta = {
  title: 'Containment/Carousel',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-carousel pagination><forge-carousel-item><div style="display:flex;align-items:center;justify-content:center;height:200px;background:var(--wa-color-primary-100)">Slide 1</div></forge-carousel-item><forge-carousel-item><div style="display:flex;align-items:center;justify-content:center;height:200px;background:var(--wa-color-primary-200)">Slide 2</div></forge-carousel-item></forge-carousel>`,
};
