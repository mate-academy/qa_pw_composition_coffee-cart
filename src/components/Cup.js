// src/components/Cup.js
import { BaseComponent } from './BaseComponent';
import { step } from '@playwright/test';

export class Cup extends BaseComponent {
  constructor(page, coffeeName) {
    super(page);
    this.cupLocator = page.getByTestId(coffeeName.replace(' ', '_'));
  }

  async click() {
    await step(`Click ${this.cupLocator} cup`, async () => {
      await this.cupLocator.click();
    });
  }
}
