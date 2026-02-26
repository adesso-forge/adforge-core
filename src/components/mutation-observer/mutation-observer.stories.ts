import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './mutation-observer.js';

const meta: Meta = {
  title: 'Utility/Mutation Observer',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-mutation-observer><div>Observed for mutations</div></forge-mutation-observer>`,
};
