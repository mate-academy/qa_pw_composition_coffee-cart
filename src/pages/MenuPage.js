import { BasePage } from './BasePage';
import { Header } from '../components/Header'
import { Cup } from '../components/Cup'
import { TotalCount } from '../components/TotalCount';
import { Promo } from '../components/Promo'

export class MenuPage extends BasePage {
  constructor(page) {
    super(page);
    this._url = '/';

    // Components:
    this.header = new Header(page);
    this.cup = new Cup(page);
    this.totalCount = new TotalCount(page);
    this.promo = new Promo(page);
  }
}
