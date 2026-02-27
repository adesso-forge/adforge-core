import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './progress-ring.js';

const meta: Meta = {
  title: 'Feedback/Progress Ring',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<forge-progress-ring value="60"></forge-progress-ring>`,
};
