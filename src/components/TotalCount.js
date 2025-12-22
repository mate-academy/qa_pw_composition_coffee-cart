// src/components/TotalCount.js
import { BaseComponent } from './BaseComponent';
import { expect, step } from '@playwright/test';

export class TotalCount extends BaseComponent {
  constructor(page) {
    super(page);
    this.counter = page.getByTestId('checkout'); // locator Total checkout
  }

  async assertCount(value) {
    await step(`Assert total checkout has value ${value}`, async () => {
      await expect(this.counter).toContainText(value.toString());
    });
  }
}
