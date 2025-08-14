import { BaseComponent } from "./BaseComponent";
import { step, expect } from '@playwright/test';

export class TotalCount extends BaseComponent {

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