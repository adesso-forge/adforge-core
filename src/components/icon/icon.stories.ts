import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './icon.js';

const meta: Meta = {
  title: 'Data Display/Icon',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-icon name="gear"></forge-icon>`,
};
