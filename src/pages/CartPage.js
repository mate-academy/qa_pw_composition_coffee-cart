import { BasePage } from './BasePage.js';
import { Header } from '../components/Header.js';
import { CartList } from '../components/CartList.js';
import { TotalCount } from '../components/TotalCount.js';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this._url = '/cart';
    this.header = new Header(page);
    this.cartList = new CartList(page);
    this.total = new TotalCount(page);
  }
}