import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './input.js';

const meta: Meta = {
  title: 'Components/Input',
  component: 'forge-input',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    clearable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <forge-input
      label="Label"
      placeholder="Enter text..."
      size=${args.size ?? 'medium'}
      type=${args.type ?? 'text'}
      ?disabled=${args.disabled}
      ?required=${args.required}
      ?clearable=${args.clearable}
    ></forge-input>
  `,
};

export const WithHelpText: Story = {
  render: () => html`
    <forge-input
      label="Email"
      type="email"
      placeholder="you@example.com"
      help-text="We'll never share your email."
    ></forge-input>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 360px;">
      <forge-input label="Small" size="small" placeholder="Small input"></forge-input>
      <forge-input label="Medium" size="medium" placeholder="Medium input"></forge-input>
      <forge-input label="Large" size="large" placeholder="Large input"></forge-input>
    </div>
  `,
};

export const Clearable: Story = {
  render: () => html`
    <forge-input label="Clearable" clearable value="Clear me"></forge-input>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <forge-input label="Disabled" disabled value="Cannot edit this"></forge-input>
  `,
};

export const Password: Story = {
  render: () => html`
    <forge-input
      label="Password"
      type="password"
      password-toggle
      placeholder="Enter password..."
    ></forge-input>
  `,
};
