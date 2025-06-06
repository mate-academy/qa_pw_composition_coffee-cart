import { BasePage } from './BasePage';
import { Header } from '../components/Header.component';
import { Promo } from '../components/Promo.component';
import { CartList } from '../components/CartList.component';
import { Cup } from '../components/Cup.component';
import { TotalCount } from '../components/TotalCount.component';

export class MenuPage extends BasePage {
  constructor(page) {
    super(page);
    this.header = new Header(page);
    this.cartList = new CartList(page);
    this.cup = new Cup(page);
    this.promo = new Promo(page);
    this.totalCount = new TotalCount(page);
    this._url = '/';
    this.totalCheckout = page.getByTestId('checkout');
  }
}
