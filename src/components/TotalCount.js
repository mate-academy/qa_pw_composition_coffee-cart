import { BaseComponent } from '../components/BaseComponent';
import { step } from 'allure-js-commons';
import { expect } from 'allure-playwright';

export class TotalCount extends BaseComponent{
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
