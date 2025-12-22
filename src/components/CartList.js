// src/components/CartList.js
import { BaseComponent } from './BaseComponent';
import { step, expect } from '@playwright/test';

export class CartList extends BaseComponent {
  constructor(page) {
    super(page);
    this.cartListLocator = page.getByRole('list').nth(1);
    this.notCoffeeMessage = page.getByText('No coffee, go add some.');
  }

  coffeeItem(name) {
    return this.cartListLocator.getByRole('listitem').filter({ hasText: name });
  }

  async clickRemoveAll(name) {
    await step(`Click 'Remove All' for ${name}`, async () => {
      await this.page.getByLabel(`Remove all ${name}`).click();
    });
  }

  async clickRemoveOne(name) {
    await step(`Click 'Remove One' for ${name}`, async () => {
      await this.page.getByLabel(`Remove one ${name}`).nth(1).click();
    });
  }

  async clickAddOne(name) {
    await step(`Click 'Add One' for ${name}`, async () => {
      await this.page.getByLabel(`Add one ${name}`).nth(1).click();
    });
  }

  async assertItemVisible(name) {
    await step(`Assert ${name} is visible`, async () => {
      await expect(this.coffeeItem(name)).toBeVisible();
    });
  }

  async assertItemHidden(name) {
    await step(`Assert ${name} is hidden`, async () => {
      await expect(this.coffeeItem(name)).toBeHidden();
    });
  }

  async assertNoCoffeeMessageVisible() {
    await step(`Assert 'No coffee' message is visible`, async () => {
      await expect(this.notCoffeeMessage).toBeVisible();
    });
  }
}
