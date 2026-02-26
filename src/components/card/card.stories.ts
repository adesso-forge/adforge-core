import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './card.js';

const meta: Meta = {
  title: 'Components/Card',
  component: 'forge-card',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <forge-card>
      <div slot="header">Card Title</div>
      This is a basic card with some content inside it.
      <div slot="footer">Footer content</div>
    </forge-card>
  `,
};

export const WithImage: Story = {
  render: () => html`
    <forge-card style="max-width: 360px;">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?w=400&h=200&fit=crop"
        alt="A kitten"
      />
      <div slot="header">Kitten Card</div>
      This card includes an image slot for visual content.
    </forge-card>
  `,
};

export const MultipleCards: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
      ${['Alpha', 'Beta', 'Gamma'].map(
        (name) => html`
          <forge-card>
            <div slot="header">${name} Project</div>
            A description of the ${name.toLowerCase()} project and its purpose.
            <div slot="footer">
              <forge-button size="small" variant="text">Details</forge-button>
            </div>
          </forge-card>
        `
      )}
    </div>
  `,
};
