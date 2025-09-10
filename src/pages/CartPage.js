import { BasePage } from './BasePage';
import { Header } from '../components/Header';
import { TotalCheckout } from '../components/TotalCheckout';
import { CartList } from '../components/CartList';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this._url = '/cart';
    this.header = new Header(page);
    this.totalCheckout = new TotalCheckout(page);
    this.cartList = new CartList(page);
  }
}
