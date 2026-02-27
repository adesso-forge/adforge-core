import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './animation.js';

const meta: Meta = {
  title: 'Utility/Animation',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-animation name="bounce" duration="1000" iterations="Infinity" play
      ><div
        style="width:100px;height:100px;background:var(--wa-color-primary-600);border-radius:8px"
      ></div
    ></forge-animation>`,
};
