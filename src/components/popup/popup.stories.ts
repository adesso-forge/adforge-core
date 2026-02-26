import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './popup.js';

const meta: Meta = {
  title: 'Utility/Popup',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-popup placement="bottom" active distance="8"><div slot="anchor" style="width:100px;height:50px;background:var(--wa-color-primary-600);color:white;display:flex;align-items:center;justify-content:center;border-radius:4px">Anchor</div><div style="padding:0.5rem;background:var(--wa-color-neutral-0);border:1px solid var(--wa-color-neutral-300);border-radius:4px">Popup</div></forge-popup>`,
};
