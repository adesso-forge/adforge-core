import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './drawer.js';

const meta: Meta = {
  title: 'Containment/Drawer',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<forge-drawer label="Drawer" open>Drawer content goes here.</forge-drawer>`,
};
