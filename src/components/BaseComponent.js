import { step as pwStep } from '@playwright/test';

export class BaseComponent {
  constructor(page) {
    this.page = page;
  }

  async step(title, body) {
    await pwStep(title, body);
  }
}