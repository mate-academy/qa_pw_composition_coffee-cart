import { test } from '../../../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../../../src/constants';

test('Cart updated correctly after clicking minus for drinks', async ({
  cartPage,
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.cup.clickCoffeeCup(COFFEE_NAMES.cappuccino);
  await menuPage.cup.clickCoffeeCup(COFFEE_NAMES.espresso);

  await menuPage.header.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.espresso);

  await cartPage.cartPage.clickCoffeeListItemRemoveOneButton(
    COFFEE_NAMES.espresso);

  await cartPage.cartPage.assertCoffeeItemIsHidden(COFFEE_NAMES.espresso);
  await cartPage.cartPage.assertCoffeeItemIsVisible(COFFEE_NAMES.cappuccino);

  await cartPage.cartPage.clickCoffeeListItemRemoveOneButton(
    COFFEE_NAMES.cappuccino);

  await cartPage.cartPage.assertCoffeeItemIsHidden(COFFEE_NAMES.cappuccino);
  await cartPage.assertNoCoffeeMessageIsVisible();
});
