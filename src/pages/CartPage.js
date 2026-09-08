import { expect, step } from '@playwright/test';
import { BasePage } from './BasePage';
import { Header } from '../components/Header.js';
import { TotalCount } from '../components/TotalCount.js';
import { CartList } from '../components/CartPage.js';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this._url = '/cart';
    this.header = new Header(page);
    this.totalCount = new TotalCount(page);
    this.cartList = new CartList(page);
  }
}
