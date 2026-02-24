import { expect, test } from '@playwright/test';
import { BaseComponent } from "./BaseComponent";

export class TotalCount extends BaseComponent {
  constructor(page) {
    super(page);
    this.totalCheckout = page.getByTestId('checkout');
  }

  async assertTotalCheckoutContainsValue(value) {
    await test.step(`Assert Total checkout has value: ${value}`, async () => {
      await expect(this.totalCheckout).toContainText(value);
    });
  }
}