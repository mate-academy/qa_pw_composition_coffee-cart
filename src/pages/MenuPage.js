import { expect, step } from '@playwright/test';
import { BasePage } from './BasePage';
import { Header } from '../components/Header'
import { Cup } from '../components/Cup'
import { TotalCount } from '../components/TotalCount';


export class MenuPage extends BasePage {
  constructor(page) {
    super(page);
    this._url = '/';
    this.promoMessage = page.getByText(
      "It's your lucky day! Get an extra cup of Mocha for $4.",
    );
    this.yesPromoButton = page.getByRole('button', { name: 'Yes, of course!' });
    this.noPromoButton = page.getByRole('button', { name: "Nah, I'll skip." });

    // Components:
    this.header = new Header(page);
    this.cup = new Cup(page);
    this.totalCount = new TotalCount(page);
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

  async assertPromoMessageIsVisible() {
    await step(`Assert promo message is visible`, async () => {
      await expect(this.promoMessage).toBeVisible();
    });
  }
}
