import{ BaseComponent } from "./BaseComponent.js";
import { expect, test } from '@playwright/test';

export class TotalCount extends BaseComponent {
 constructor(page) {
   super(page);
   this.totalCheckout = page.getByTestId('checkout');
   this.cartListLocator = page.getByRole('list').nth(1);


 }
 coffeeItem(name) {
    return this.cartListLocator.getByRole('listitem').filter({ hasText: name });
  }

  async assertTotalCheckoutContainsValue(value) {
    await test.step(`Assert Total checkout has value: ${value}`, async () => {
      await expect(this.totalCheckout).toContainText(value);
    });
  }

   coffeeListItemTotalCostCell(name) {
    return this.coffeeItem(name).locator('div').nth(3);
  }
  
  async assertCoffeeTotalCostContainsCorrectText(name, text) {
    await test.step(`Assert the ${name} total cost has correct amount`, async () => {
      await expect(this.coffeeListItemTotalCostCell(name)).toContainText(text);
    });
  }

}