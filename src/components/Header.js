import { BaseComponent } from './BaseComponent.js';

export class Header extends BaseComponent {
  constructor(page) {
    super(page);
    this.cartLink = page.getByLabel('Cart page');
  }

  async clickCartLink() {
    await this.step(`Click 'Cart' link`, async () => {
      await this.cartLink.click();
    });
  }
}