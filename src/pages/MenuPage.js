import { expect, step } from '@playwright/test';
import { BasePage } from './BasePage';
import { Header } from '../components/Header.js';
import { Promo } from '../components/Promo.js';
import { Cup } from '../components/Cup.js';
import { TotalCount } from '../components/TotalCount.js';

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
