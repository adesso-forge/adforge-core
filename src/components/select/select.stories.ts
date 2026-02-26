import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './select.js';
import '../option/option.js';

const meta: Meta = {
  title: 'Components/Select',
  component: 'forge-select',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
    multiple: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <forge-select
      label="Favourite Fruit"
      placeholder="Select one..."
      size=${args.size ?? 'medium'}
      ?disabled=${args.disabled}
      ?clearable=${args.clearable}
      ?multiple=${args.multiple}
    >
      <forge-option value="apple">Apple</forge-option>
      <forge-option value="banana">Banana</forge-option>
      <forge-option value="cherry">Cherry</forge-option>
      <forge-option value="mango">Mango</forge-option>
    </forge-select>
  `,
};

export const WithHelpText: Story = {
  render: () => html`
    <forge-select
      label="Country"
      placeholder="Choose a country..."
      help-text="Select the country where you reside."
      clearable
    >
      <forge-option value="de">Germany</forge-option>
      <forge-option value="at">Austria</forge-option>
      <forge-option value="ch">Switzerland</forge-option>
      <forge-option value="nl">Netherlands</forge-option>
    </forge-select>
  `,
};

export const Multiple: Story = {
  render: () => html`
    <forge-select label="Skills" placeholder="Select multiple..." multiple clearable>
      <forge-option value="html">HTML</forge-option>
      <forge-option value="css">CSS</forge-option>
      <forge-option value="js">JavaScript</forge-option>
      <forge-option value="ts">TypeScript</forge-option>
      <forge-option value="react">React</forge-option>
      <forge-option value="lit">Lit</forge-option>
    </forge-select>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 360px;">
      <forge-select label="Small" size="small" placeholder="Small select">
        <forge-option value="a">Option A</forge-option>
        <forge-option value="b">Option B</forge-option>
      </forge-select>
      <forge-select label="Medium" size="medium" placeholder="Medium select">
        <forge-option value="a">Option A</forge-option>
        <forge-option value="b">Option B</forge-option>
      </forge-select>
      <forge-select label="Large" size="large" placeholder="Large select">
        <forge-option value="a">Option A</forge-option>
        <forge-option value="b">Option B</forge-option>
      </forge-select>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <forge-select label="Disabled" disabled value="apple">
      <forge-option value="apple">Apple</forge-option>
      <forge-option value="banana">Banana</forge-option>
    </forge-select>
  `,
};
