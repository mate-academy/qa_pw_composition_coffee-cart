import { expect, step } from '@playwright/test';
import { BasePage } from './BasePage';
import { Header } from '../components/Header';
import { CartList } from '../components/CartList';
import { TotalCount } from '../components/TotalCount';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this._url = '/cart';
    this.header = new Header(page);
    this.cartList = new CartList(page);
    this.totalCount = new TotalCount(page);
    this.notCoffeeMessage = page.getByText('No coffee, go add some.');
  }

  async assertNoCoffeeMessageIsVisible() {
    await step(`Assert 'No coffee' message is visible`, async () => {
      await expect(this.notCoffeeMessage).toBeVisible();
    });
  }
}
