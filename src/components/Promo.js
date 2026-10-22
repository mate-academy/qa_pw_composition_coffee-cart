import { BaseComponent } from './BaseComponent';
import { expect } from 'allure-playwright';

export class Promo extends BaseComponent {
  #promoMessage;
  #yesPromoButton;
  #noPromoButton;

  constructor(page) {
    super(page);

    this.#promoMessage = page.getByText(
      "It's your lucky day! Get an extra cup of Mocha for $4.",
    );

    this.#yesPromoButton = page.getByRole('button', {
      name: 'Yes, of course!',
    });

    this.#noPromoButton = page.getByRole('button', { name: "Nah, I'll skip." });
  }

  async clickYesPromoButton() {
    await this.step(`Click 'Yes' promo button`, async () => {
      await this.#yesPromoButton.click();
    });
  }

  async clickNoPromoButton() {
    await this.step(`Click 'No' promo button`, async () => {
      await this.#noPromoButton.click();
    });
  }

  async assertPromoMessageIsVisible() {
    await this.step(`Assert promo message is visible`, async () => {
      await expect(this.#promoMessage).toBeVisible();
    });
  }
}
