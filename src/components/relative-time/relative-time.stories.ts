import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './relative-time.js';

const meta: Meta = {
  title: 'Data Display/Relative Time',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-relative-time date="2026-02-25T12:00:00"></forge-relative-time>`,
};
