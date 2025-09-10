import { expect } from '@playwright/test';
import { BaseComponent } from './BaseComponent.js';

export class Cup extends BaseComponent {
  coffeeCupLocator(coffeeName) {
    const testId = coffeeName.replace(' ', '_');
    return this.page.getByTestId(testId);
  }

  coffeeCupCostLocator(coffeeName) {
    const cup = this.coffeeCupLocator(coffeeName);
    return this.page.getByRole('listitem').filter({ has: cup });
  }

  async clickCoffeeCup(coffeeName) {
    await this.step(`Click ${coffeeName} cup`, async () => {
      await this.coffeeCupLocator(coffeeName).click();
    });
  }

  async assertCoffeeCupCostHasValue(coffee, value) {
    await this.step(`Assert ${coffee} cup cost has value: ${value}`, async () => {
      await expect(this.coffeeCupCostLocator(coffee)).toContainText(value);
    });
  }
}