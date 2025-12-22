// src/components/Promo.js
import { BaseComponent } from './BaseComponent';

export class Promo extends BaseComponent {
  constructor(page) {
    super(page);
    this.yesButton = page.locator('[data-test="promo-yes"]');
    this.noButton = page.locator('[data-test="promo-no"]');
    this.message = page.locator('[data-test="promo-message"]');
  }

  async clickYesPromoButton() {
    await this.yesButton.click();
  }

  async clickNoPromoButton() {
    await this.noButton.click();
  }

  async assertPromoMessageIsVisible() {
    await expect(this.message).toBeVisible();
  }
}
