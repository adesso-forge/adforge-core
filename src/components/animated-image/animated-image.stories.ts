import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './animated-image.js';

const meta: Meta = {
  title: 'Utility/Animated Image',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<forge-animated-image
      ><img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGYzOHRqYnE5bWM4d2Q4bmRiNGRzOGptN2FtcHpqdnlvZ3RrZmZ6ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aCSPqXE5C6T8tBC/giphy.gif"
        alt="Demo"
    /></forge-animated-image>`,
};
