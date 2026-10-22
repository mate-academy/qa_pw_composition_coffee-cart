import { expect } from 'allure-playwright';
import { BaseComponent } from './BaseComponent';

export class Cup extends BaseComponent {
  constructor(page) {
    super(page);
  }

  coffeeCupLocator(coffeeName) {
    const testId = coffeeName.replace(' ', '_');

    return this.page.getByTestId(testId);
  }

  coffeeCupCostLocator(coffeeName) {
    const coffeeCup = this.coffeeCupLocator(coffeeName);
    return this.page.getByRole('listitem').filter({ has: coffeeCup });
  }

  async clickCoffeeCup(coffeeName) {
    await this.step(`Click ${coffeeName} cup`, async () => {
      await this.coffeeCupLocator(coffeeName).click();
    });
  }

  async assertCoffeeCupCostHasValue(coffee, value) {
    await this.step(
      `Assert ${coffee} cup cost has value: ${value}`,
      async () => {
        await expect(this.coffeeCupCostLocator(coffee)).toContainText(value);
      },
    );
  }
}
