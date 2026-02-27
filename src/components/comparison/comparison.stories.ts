import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './comparison.js';

const meta: Meta = {
  title: 'Data Display/Comparison',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-comparison
      ><div
        slot="before"
        style="width:300px;height:200px;background:var(--wa-color-primary-600);display:flex;align-items:center;justify-content:center;color:white"
      >
        Before
      </div>
      <div
        slot="after"
        style="width:300px;height:200px;background:var(--wa-color-success-600);display:flex;align-items:center;justify-content:center;color:white"
      >
        After
      </div></forge-comparison
    >`,
};
