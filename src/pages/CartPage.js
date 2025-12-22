// src/pages/CartPage.js
import { BasePage } from './BasePage';
import { Header } from '../components/Header';
import { CartList } from '../components/CartList';
import { TotalCount } from '../components/TotalCount';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this._url = '/cart';
    this.header = new Header(page); // Header component
    this.cartList = new CartList(page); // Cart list component
    this.totalCount = new TotalCount(page); // Total checkout component
  }

  // --- Opcjonalnie helper do pojedynczego elementu kawy ---
  coffee(name) {
    return this.cartList.item(name); // metoda item(name) w CartList.js
  }
}
