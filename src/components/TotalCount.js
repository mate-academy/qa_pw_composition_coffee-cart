import { expect } from 'allure-playwright';
import { BaseComponent } from './BaseComponent';

export class TotalCount extends BaseComponent {
  #totalCheckout;

  constructor(page) {
    super(page);
    this.#totalCheckout = page.getByTestId('checkout');
  }

  async assertTotalCheckoutContainsValue(value) {
    await this.step(`Assert Total checkout has value: ${value}`, async () => {
      await expect(this.#totalCheckout).toContainText(value);
    });
  }
}
