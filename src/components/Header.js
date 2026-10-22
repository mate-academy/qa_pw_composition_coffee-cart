import { BaseComponent } from './BaseComponent';
export class Header extends BaseComponent {
  #cartLink;

  constructor(page) {
    super(page);
    this.#cartLink = this.page.getByLabel('Cart page');
  }

  async clickCartLink() {
    await this.step(`Click 'Cart' link`, async () => {
      await this.#cartLink.click();
    });
  }
}
