import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './button-group.js';

const meta: Meta = {
  title: 'Action/Button Group',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-button-group
      ><forge-button>Left</forge-button><forge-button>Center</forge-button
      ><forge-button>Right</forge-button></forge-button-group
    >`,
};
