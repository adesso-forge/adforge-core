import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './zoomable-frame.js';

const meta: Meta = {
  title: 'Media/Zoomable Frame',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-zoomable-frame><div style="width:400px;height:300px;background:var(--wa-color-neutral-100);display:flex;align-items:center;justify-content:center">Zoomable content</div></forge-zoomable-frame>`,
};
