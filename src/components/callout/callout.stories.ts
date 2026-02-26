import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './callout.js';

const meta: Meta = {
  title: 'Containment/Callout',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-callout>This is an important callout message.</forge-callout>`,
};
