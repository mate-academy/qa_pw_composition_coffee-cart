import { BaseComponent } from './BaseComponent';
import { expect, step } from '@playwright/test';

export class TotalCount extends BaseComponent {
  constructor(page) {
    super(page);
    this.totalCheckout = page.getByTestId('checkout');
  }

  async assertTotalCheckoutContainsValue(value) {
    await step(`Assert Total checkout has value: ${value}`, async () => {
      await expect(this.totalCheckout).toContainText(value);
    });
  }
}
