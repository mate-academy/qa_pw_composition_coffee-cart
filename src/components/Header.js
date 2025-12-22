// src/components/Header.js
import { BaseComponent } from './BaseComponent';

export class Header extends BaseComponent {
  constructor(page) {
    super(page);
    this.cartLink = page.locator('[data-test="cart-link"]'); // przykład selektora
  }

  async clickCartLink() {
    await this.cartLink.click();
  }
}
