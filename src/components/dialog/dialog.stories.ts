import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './dialog.js';
import '../button/button.js';

const meta: Meta = {
  title: 'Components/Dialog',
  component: 'forge-dialog',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <forge-button
      @click=${(e: Event) => {
        const dialog = (e.target as HTMLElement).nextElementSibling as any;
        dialog?.show();
      }}
    >
      Open Dialog
    </forge-button>
    <forge-dialog label="Dialog Title">
      This is a basic dialog with a title and some content.
      <forge-button slot="footer" variant="brand">Confirm</forge-button>
    </forge-dialog>
  `,
};

export const Confirmation: Story = {
  render: () => html`
    <forge-button
      variant="danger"
      @click=${(e: Event) => {
        const dialog = (e.target as HTMLElement).nextElementSibling as any;
        dialog?.show();
      }}
    >
      Delete Item
    </forge-button>
    <forge-dialog label="Confirm Deletion">
      Are you sure you want to delete this item? This action cannot be undone.
      <div slot="footer" style="display: flex; gap: 0.5rem; justify-content: flex-end;">
        <forge-button
          variant="neutral"
          @click=${(e: Event) => {
            const dialog = (e.target as HTMLElement).closest('forge-dialog') as any;
            dialog?.hide();
          }}
        >
          Cancel
        </forge-button>
        <forge-button variant="danger">Delete</forge-button>
      </div>
    </forge-dialog>
  `,
};

export const LongContent: Story = {
  render: () => html`
    <forge-button
      @click=${(e: Event) => {
        const dialog = (e.target as HTMLElement).nextElementSibling as any;
        dialog?.show();
      }}
    >
      Open Scrollable Dialog
    </forge-button>
    <forge-dialog label="Terms of Service">
      ${Array.from({ length: 10 }, (_, i) => html`
        <p>Section ${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      `)}
      <forge-button slot="footer" variant="brand">Accept</forge-button>
    </forge-dialog>
  `,
};
