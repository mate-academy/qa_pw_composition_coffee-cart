import { BaseComponent } from './BaseComponent';
import { step, expect } from '@playwright/test';

export class TotalCount extends BaseComponent {
  constructor(page) {
    super(page);
    this.totalCheckout = page.getByTestId('checkout');
  }

  coffeeCupLocator(coffeeName) {
    const testId = coffeeName.replace(' ', '_');

    return this.page.getByTestId(testId);
  }

  coffeeCupCostLocator(coffeeName) {
    const coffeeCup = this.coffeeCupLocator(coffeeName);
    return this.page.getByRole('listitem').filter({ has: coffeeCup });
  }

  async assertTotalCheckoutContainsValue(value) {
    await step(`Assert Total checkout has value: ${value}`, async () => {
      await expect(this.totalCheckout).toContainText(value.toString());
    });
  }

  async assertCoffeeCupCostHasValue(coffee, value) {
    await step(`Assert ${coffee} cup cost has value: ${value}`, async () => {
      await expect(this.coffeeCupCostLocator(coffee)).toContainText(value);
    });
  }
}
