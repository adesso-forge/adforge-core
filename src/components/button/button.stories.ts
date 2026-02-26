import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './button.js';

const meta: Meta = {
  title: 'Components/Button',
  component: 'forge-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'brand', 'success', 'neutral', 'warning', 'danger', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    outline: {
      control: 'boolean',
    },
    trackClicks: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <forge-button
      variant=${args.variant ?? 'default'}
      size=${args.size ?? 'medium'}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
      ?outline=${args.outline}
      ?track-clicks=${args.trackClicks}
    >
      Button
    </forge-button>
  `,
};

export const Brand: Story = {
  render: () => html`<forge-button variant="brand">Brand Button</forge-button>`,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <forge-button size="small">Small</forge-button>
      <forge-button size="medium">Medium</forge-button>
      <forge-button size="large">Large</forge-button>
    </div>
  `,
};

export const Variants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <forge-button variant="default">Default</forge-button>
      <forge-button variant="brand">Brand</forge-button>
      <forge-button variant="success">Success</forge-button>
      <forge-button variant="neutral">Neutral</forge-button>
      <forge-button variant="warning">Warning</forge-button>
      <forge-button variant="danger">Danger</forge-button>
      <forge-button variant="text">Text</forge-button>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`<forge-button disabled>Disabled</forge-button>`,
};

export const Loading: Story = {
  render: () => html`<forge-button loading>Loading</forge-button>`,
};

export const WithTrackClicks: Story = {
  render: () => html`
    <forge-button track-clicks variant="brand"
      @forge-track=${(e: CustomEvent) => console.log('Tracked:', e.detail)}
    >
      Track Clicks
    </forge-button>
  `,
};
