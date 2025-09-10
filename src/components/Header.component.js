import { step } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class Header extends BaseComponent {
  constructor(page) {
    super(page);
    this.cartLink = page.getByLabel('Cart page');
  }

  coffeeCupLocator(coffeeName) {
    const testId = coffeeName.replace(' ', '_');

    return this.page.getByTestId(testId);
  }

  coffeeCupCostLocator(coffeeName) {
    const coffeeCup = this.coffeeCupLocator(coffeeName);
    return this.page.getByRole('listitem').filter({ has: coffeeCup });
  }

  async clickCartLink() {
    await step(`Click 'Cart' link`, async () => {
      await this.cartLink.click();
    });
  }
}
