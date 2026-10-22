import { test } from 'allure-playwright';
export class BaseComponent {
  constructor(page) {
    this.page = page;
  }

  async step(title, stepToRun) {
    return await test.step(title, stepToRun);
  }
}
