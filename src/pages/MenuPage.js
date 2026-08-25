import { BasePage } from './BasePage';
import { Promo } from '../components/Promo';
import { Header } from '../components/Header';
import { Cup } from '../components/Cup';
import { TotalCount } from '../components/TotalCount';

export class MenuPage extends BasePage {
  constructor(page) {
    super(page);
    this._url = '/';
    this.header = new Header(page);
    this.promo = new Promo(page);
    this.cup = new Cup(page);
    this.totalCount = new TotalCount(page);
  }
}
