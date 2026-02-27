import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './split-panel.js';

const meta: Meta = {
  title: 'Navigation/Split Panel',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-split-panel
      ><div
        slot="start"
        style="height:200px;display:flex;align-items:center;justify-content:center;background:var(--wa-color-primary-50)"
      >
        Start
      </div>
      <div
        slot="end"
        style="height:200px;display:flex;align-items:center;justify-content:center;background:var(--wa-color-neutral-50)"
      >
        End
      </div></forge-split-panel
    >`,
};
