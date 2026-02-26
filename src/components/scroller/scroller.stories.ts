import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './scroller.js';

const meta: Meta = {
  title: 'Layout/Scroller',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-scroller><div style="white-space:nowrap"><span style="display:inline-block;width:200px;height:100px;background:var(--wa-color-primary-100);margin:0.25rem">Item 1</span><span style="display:inline-block;width:200px;height:100px;background:var(--wa-color-primary-200);margin:0.25rem">Item 2</span><span style="display:inline-block;width:200px;height:100px;background:var(--wa-color-primary-300);margin:0.25rem">Item 3</span></div></forge-scroller>`,
};
