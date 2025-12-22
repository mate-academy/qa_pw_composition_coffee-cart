// src/components/Cup.js
import { BaseComponent } from './BaseComponent';
import { step, expect } from '@playwright/test'; // <-- dodany expect

export class Cup extends BaseComponent {
  constructor(page, coffeeName) {
    super(page);
    this.coffeeName = coffeeName;
    this.cupLocator = page.getByTestId(coffeeName.replace(' ', '_'));
  }

  async click() {
    await step(`Click ${this.coffeeName} cup`, async () => {
      await this.cupLocator.click();
    });
  }

  async assertCost(value) {
    const coffeeCup = this.cupLocator;
    const coffeeCostLocator = this.page
      .getByRole('listitem')
      .filter({ has: coffeeCup });
    await step(
      `Assert ${this.coffeeName} cup cost has value: ${value}`,
      async () => {
        await expect(coffeeCostLocator).toContainText(value); // teraz expect jest dostępny
      },
    );
  }
}
