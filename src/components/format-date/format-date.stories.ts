import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './format-date.js';

const meta: Meta = {
  title: 'Data Display/Format Date',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-format-date
      date="2026-02-26T12:00:00"
      month="long"
      day="numeric"
      year="numeric"
    ></forge-format-date>`,
};
