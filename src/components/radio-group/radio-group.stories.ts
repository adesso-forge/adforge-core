import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './radio-group.js';

const meta: Meta = {
  title: 'Input/Radio Group',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-radio-group label="Select an option" value="1"><forge-radio value="1">Option 1</forge-radio><forge-radio value="2">Option 2</forge-radio><forge-radio value="3">Option 3</forge-radio></forge-radio-group>`,
};
