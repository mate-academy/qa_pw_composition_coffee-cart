import { BaseComponent } from "./BaseComponent.js";
import { test, expect } from '@playwright/test';

export class Header extends BaseComponent{
 constructor(page) {
   super(page);
   this.cartLink = page.getByLabel('Cart page');

 }

 async clickCartLink() {
    await test.step(`Click 'Cart' link`, async () => {
      await this.cartLink.click();
    });
  }

   
}