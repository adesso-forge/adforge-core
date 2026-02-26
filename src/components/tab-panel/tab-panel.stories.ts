import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './tab-panel.js';

const meta: Meta = {
  title: 'Containment/Tab Panel',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-tab-panel name="panel-1">Panel content here</forge-tab-panel>`,
};
