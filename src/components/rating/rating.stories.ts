import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './rating.js';

const meta: Meta = {
  title: 'Input/Rating',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<forge-rating value="3"></forge-rating>`,
};
