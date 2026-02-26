import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './slider.js';

const meta: Meta = {
  title: 'Input/Slider',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-slider label="Volume" value="50"></forge-slider>`,
};
