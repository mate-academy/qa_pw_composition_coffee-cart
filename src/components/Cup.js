import { BaseComponent } from './BaseComponent';
import { step } from '@playwright/test';

export class Cup extends BaseComponent {
  constructor(page) {
    super(page);
  }

  coffeeCupLocator(coffeeName) {
    const testId = coffeeName.replace(' ', '_');

    return this.page.getByTestId(testId);
  }

  async clickCoffeeCup(coffeeName) {
    await step(`Click ${coffeeName} cup`, async () => {
      await this.coffeeCupLocator(coffeeName).click();
    });
  }
}
