import { BaseComponent } from '../components/BaseComponent';
import { step } from 'allure-js-commons';

export class Header extends BaseComponent{
  constructor(page) {
    super(page);
    this.cartLink = page.getByLabel('Cart page');
  }

  async clickCartLink() {
    await step(`Click 'Cart' link`, async () => {
      await this.cartLink.click();
    });
  }
 }
