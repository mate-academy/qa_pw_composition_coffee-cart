# Composition for Coffee-Cart pages

## Table of contents

- [Description](#description)
- [Preparation](#preparation)
- [Main Task](#main-task)
- [Task Reporting](#task-reporting)

## Description

In this task, you will practice creating reusable components and building pages from these components. 
You will create components classes for the Menu and Cart pages of the Coffee Cart. 

The **Menu page** consists of the *Header*, *Menu list*, *Cup* and *Total count* components.

![menu page](https://github.com/mate-academy/qa_pw_composition_coffee-cart/blob/main/MenuPage.png). 

Additionaly **Menu page** has the *Promo* component.  

![menu page](https://github.com/mate-academy/qa_pw_composition_coffee-cart/blob/main/Promo.png). 

The **Cart page** consists of the *Header*, *Total count* and *Cart list* components.

![menu page](https://github.com/mate-academy/qa_pw_composition_coffee-cart/blob/main/CartPage.png). 

## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running git checkout -b task_solution.
3. Run the installation commands:

    - `npm ci`
    - `npx playwright install`

## Main Task

1. Create new folder `components` under the `.src/` folder.
2. Create file `Header.js` under the `.src/components/` folder.
3. Create `Header` class in the `Header.js` file:
```javascript
export class Header {
 constructor(page) {
   this.page = page;
 }
```
4. 



15. Run all the tests to make sure nothing is broken.

## Task Reporting

1. Add and commit all your updates.
2. Push the code to the origin.
3. Create a PR for your changes.
4. Keep implementing suggestions from code review until your PR is approved.
