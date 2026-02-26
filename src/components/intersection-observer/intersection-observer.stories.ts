import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './intersection-observer.js';

const meta: Meta = {
  title: 'Utility/Intersection Observer',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-intersection-observer><div style="height:100px;background:var(--wa-color-neutral-100);display:flex;align-items:center;justify-content:center">Observed element</div></forge-intersection-observer>`,
};
