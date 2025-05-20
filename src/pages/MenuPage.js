import { expect, step } from '@playwright/test';
import { BasePage } from './BasePage';
import { Header }  from '../components/Header';
import { Promo } from '../components/Promo';
import { TotalCount } from '../components/TotalCount';
import { Cup } from '../components/Cup';

export class MenuPage extends BasePage {
  constructor(page) {
    super(page);
    this._url = '/';
    this.totalCheckout = page.getByTestId('checkout');
    this.header = new Header(page);
    this.promo = new Promo(page);
    this.totalCount = new TotalCount(page)
    this.cup = new Cup(page)
  }
}
