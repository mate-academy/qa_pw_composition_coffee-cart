import { expect, step } from '@playwright/test';
import { BasePage } from './BasePage';
import { Header } from '../components/Header';
import { Total } from '../components/Total';
import { CartList } from '../components/CartList';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this._url = '/cart';
    this.header = new Header(page);
    this.total = new Total(page);
    this.cartList = new CartList(page);
  }
}
