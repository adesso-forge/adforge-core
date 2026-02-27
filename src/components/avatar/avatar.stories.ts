import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './avatar.js';

const meta: Meta = {
  title: 'Data Display/Avatar',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<forge-avatar label="User"></forge-avatar>`,
};
