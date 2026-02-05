import { BaseComponent } from './BaseComponent';
import { step } from '@playwright/test';

export class Promo extends BaseComponent {
  constructor(page) {
    super(page);
    this.cartLink = page.getByLabel('Cart page');
    this.promoMessage = page.getByText(
      "It's your lucky day! Get an extra cup of Mocha for $4.",
    );
    this.yesPromoButton = page.getByRole('button', { name: 'Yes, of course!' });
    this.noPromoButton = page.getByRole('button', { name: "Nah, I'll skip." });
  }

  async clickCartLink() {
    await step(`Click 'Promo' link`, async () => {
      await this.cartLink.click();
    });
  }

}