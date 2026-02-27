import { describe, it, expect, vi, beforeAll } from 'vitest';
import { LitElement } from 'lit';

// Mock the Web Awesome button side-effect import (registers wa-button in a real browser)
vi.mock('@awesome.me/webawesome/dist/components/button/button.js', () => ({}));

// Register a minimal stand-in for wa-button BEFORE importing forge-button,
// because ForgeButton dynamically extends `customElements.get('wa-button')`.
beforeAll(async () => {
  class MockWaButton extends LitElement {
    static css: unknown[] = [];
  }
  customElements.define('wa-button', MockWaButton);

  // Dynamic import so the mock is in place when the module evaluates
  await import('../components/button/button.js');
});

describe('forge-button', () => {
  it('is registered as a custom element', () => {
    expect(customElements.get('forge-button')).toBeDefined();
  });

  it('defaults trackClicks to false', () => {
    const el = document.createElement('forge-button') as HTMLElement & { trackClicks: boolean };
    expect(el.trackClicks).toBe(false);
  });

  it('dispatches forge-track event when trackClicks is enabled', () => {
    const el = document.createElement('forge-button') as HTMLElement & { trackClicks: boolean };
    el.trackClicks = true;
    document.body.appendChild(el);

    const handler = vi.fn();
    el.addEventListener('forge-track', handler);
    el.click();

    expect(handler).toHaveBeenCalledOnce();
    expect((handler.mock.calls[0][0] as CustomEvent).detail).toEqual({
      component: 'button',
      action: 'click',
    });

    document.body.removeChild(el);
  });

  it('does NOT dispatch forge-track when trackClicks is disabled', () => {
    const el = document.createElement('forge-button') as HTMLElement & { trackClicks: boolean };
    document.body.appendChild(el);

    const handler = vi.fn();
    el.addEventListener('forge-track', handler);
    el.click();

    expect(handler).not.toHaveBeenCalled();
    document.body.removeChild(el);
  });
});
