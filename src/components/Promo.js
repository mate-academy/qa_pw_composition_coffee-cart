import { BaseComponent } from "./BaseComponent";
import { step, expect } from "@playwright/test";

export class Promo extends BaseComponent {
  constructor(page) {
    super(page);
    this.yesPromoButton = page.getByRole('button', { name: 'Yes, of course!' });
    this.noPromoButton = page.getByRole('button', { name: "Nah, I'll skip." });
    this.promoMessage = page.getByText(
      "It's your lucky day! Get an extra cup of Mocha for $4.",
    );
  }
  async assertPromoMessageIsVisible() {
    await step(`Assert promo message is visible`, async () => {
      await expect(this.promoMessage).toBeVisible();
    });
  }

  async clickYesPromoButton() {
    await step(`Click 'Yes' promo button`, async () => {
      await this.yesPromoButton.click();
    });
  }

  async clickNoPromoButton() {
    await step(`Click 'No' promo button`, async () => {
      await this.noPromoButton.click();
    });
  }
}
