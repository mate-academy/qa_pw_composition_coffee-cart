import { test } from '@playwright/test';
import { BaseComponent } from "./BaseComponent";

export class Header extends BaseComponent {
  constructor(page) {
    super(page);
    this.cartLink = page.getByLabel('Cart page');
  }

  async clickCartLink() {
    await test.step(`Click 'Cart' link`, async () => {
      await this.cartLink.click();
    });
  }
}