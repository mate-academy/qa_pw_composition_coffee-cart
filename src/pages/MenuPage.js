// src/pages/MenuPage.js
import { BasePage } from './BasePage';
import { Header } from '../components/Header';
import { Promo } from '../components/Promo';
import { Cup } from '../components/Cup';
import { TotalCount } from '../components/TotalCount';

export class MenuPage extends BasePage {
  constructor(page) {
    super(page);
    this._url = '/';
    this.header = new Header(page); // Header component
    this.promo = new Promo(page); // Promo component
    this.totalCount = new TotalCount(page); // TotalCount component
  }

  // --- Metody obsługi kawy przeniesione do Cup.js ---
  cup(coffeeName) {
    return new Cup(this.page, coffeeName);
  }
}
