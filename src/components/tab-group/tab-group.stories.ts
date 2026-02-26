import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './tab-group.js';

const meta: Meta = {
  title: 'Containment/Tab Group',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-tab-group><forge-tab slot="nav" panel="general">General</forge-tab><forge-tab slot="nav" panel="details">Details</forge-tab><forge-tab-panel name="general">General content</forge-tab-panel><forge-tab-panel name="details">Details content</forge-tab-panel></forge-tab-group>`,
};
