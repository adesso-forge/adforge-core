import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './format-number.js';

const meta: Meta = {
  title: 'Data Display/Format Number',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-format-number
      value="1234.56"
      type="currency"
      currency="EUR"
    ></forge-format-number>`,
};
