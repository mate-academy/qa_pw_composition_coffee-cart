import { expect, step } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class TotalCheckout extends BaseComponent {
  constructor(page) {
    super(page);
    this.totalCheckout = page.getByTestId('checkout');
  }

  async assertTotalCheckoutContainsValue(value) {
    await step(`Assert Total Checkout has value ${value}`, async () => {
      await expect(this.totalCheckout).toContainText(value);
    });
  }
}
