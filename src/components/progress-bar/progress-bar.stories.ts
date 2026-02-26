import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './progress-bar.js';

const meta: Meta = {
  title: 'Feedback/Progress Bar',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-progress-bar value="60" label="Progress"></forge-progress-bar>`,
};
