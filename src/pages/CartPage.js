import { expect, step } from '@playwright/test';
import { BasePage } from './BasePage';
import { Header } from '../components/Header.component';
import { CartList } from '../components/CartList.component';
import { Cup } from '../components/Cup.component';
import { Promo } from '../components/Promo.component';
import { TotalCount } from '../components/TotalCount.component';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.header = new Header(page);
    this.cartList = new CartList(page);
    this.cup = new Cup(page);
    this.promo = new Promo(page);
    this.totalCount = new TotalCount(page);
    this.notCoffeeMessage = page.getByText('No coffee, go add some.');
    this._url = '/cart';
  }

  async assertNoCoffeeMessageIsVisible() {
    await step(`Assert 'No coffee' message is visible`, async () => {
      await expect(this.notCoffeeMessage).toBeVisible();
    });
  }
}
