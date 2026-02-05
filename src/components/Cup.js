import { BaseComponent } from './BaseComponent';
import { step } from '@playwright/test';

export class Cup extends BaseComponent {
  constructor(page) {
    super(page);
  }

  async clickCartLink() {
    await step(`Click 'Promo' link`, async () => {
      await this.cartLink.click();
    });
  }
}