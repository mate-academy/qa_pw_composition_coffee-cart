# Composition for Coffee-Cart pages

## Table of contents

- [Description](#description)
- [Preparation](#preparation)
- [Main Task](#main-task)
- [Task Reporting](#task-reporting)

## Description

In this task, you will practice creating reusable components and building pages from these components. 
You will create component classes for the Menu and Cart pages of the Coffee Cart. 

The **Menu page** consists of the *Header*, *Cup*, and *Total count* components. 

![menu page](https://github.com/mate-academy/qa_pw_composition_coffee-cart/blob/main/Menu.png) 

Additionally, the **Menu page** has the *Promo* component.  

![promo](https://github.com/mate-academy/qa_pw_composition_coffee-cart/blob/main/PromoComp.png) 

The **Cart page** consists of the *Header*, *Total count*, and *Cart list* components.

![cart page](https://github.com/mate-academy/qa_pw_composition_coffee-cart/blob/main/Cart.png) 

Note that the *Total count* component is small, and it's possible to leave it within the page object. However, as it's used in two pages, we will create a separate class for it to avoid code duplication. 


## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running git checkout -b task_solution.
3. Run the installation commands:

    - `npm ci`
    - `npx playwright install`

## Main Task

1. Create a new folder `components` under the `.src/` folder.
2. Create `BaseComponent` class under the `.src/components/` folder.
```javascript
export class BaseComponent {
 constructor(page) {
   this.page = page;
 }
}
```
3. Create a file `Header.js` under the `.src/components/` folder.
4. Create `Header` class in the `Header.js` file. This class should inherit the `BaseComponent`.
```javascript
export class Header extends BaseComponent{
 constructor(page) {
   super(page);
 }
}
```
5. Initialize the header component in the `MenuPage` class:
```javascript
constructor(page) {
  super(page);
  this._url = '/';
  this.header = new Header(page);
}
```
6. Similar to above, initialize the header component in the `CartPage` class.
7. Move the `this.cartLink` locator and `clickCartLink()` method from the `Header` class.
8. Find the tests or fixtures that use the `clickCartLink()` method and update them to use the header component:
```javascript
await menuPage.header.clickCartLink();
```
9. Run all the tests to make sure nothing is broken.
10. Create `Promo.js` file under the `.src/components/` folder.
11. Create `Promo` class which extends the `BaseComponent`:
```javascript
export class Promo extends BaseComponent{
 constructor(page) {
   super(page);
 }
}
```
12. Initialize the promo component in the `MenuPage` class:
```javascript
constructor(page) {
  super(page);
  this._url = '/';
  this.header = new Header(page);
  this.promo = new Promo(page);
}
```
13. Move all promo-related methods and corresponding locators from the `MenuPage` class to the `Promo` class:
* `clickYesPromoButton()`, `clickNoPromoButton()`, `assertPromoMessageIsVisible()`;
14. Update all the tests that use the promo component analogously to step 8 of this instruction.
15. Run all the tests to make sure nothing is broken.
16. Create the classes for `Cup`, `Total count`, and `Cart list` components.
17. Initialize corresponding components in the page's constructors.
18. Move all corresponding locators and methods to the components.
19. Update the tests to use the new page objects structure.
20. Run all the tests to make sure nothing is broken. 

## Task Reporting

1. Add and commit all your updates.
2. Push the code to the origin.
3. Create a PR for your changes.
4. Keep implementing suggestions from code review until your PR is approved.
