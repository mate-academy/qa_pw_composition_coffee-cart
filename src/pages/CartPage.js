import { expect, step } from '@playwright/test';
import { BasePage } from './BasePage';
import { Header } from '../components/Header';
import { TotalCount } from '../components/TotalCount';
import { CartList } from '../components/CartList';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this._url = '/cart';
    this.notCoffeeMessage = page.getByText('No coffee, go add some.');
    this.totalCount = new TotalCount(page);
    this.header = new Header(page)
    this.cartList = new CartList(page);
  }

  async assertNoCoffeeMessageIsVisible() {
    await step(`Assert 'No coffee' message is visible`, async () => {
      await expect(this.notCoffeeMessage).toBeVisible();
    });
  }

 
}
