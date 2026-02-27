import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './radio.js';

const meta: Meta = {
  title: 'Input/Radio',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`<forge-radio value="1">Radio option</forge-radio>`,
};
