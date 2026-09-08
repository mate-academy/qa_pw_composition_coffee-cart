import { step } from '@playwright/test';

export class BaseComponent {
  constructor(page) {
    this.page = page;
  }
}
