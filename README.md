# Composition for Coffee-Cart pages

## Description

In this task, you will practice creating reusable components and building pages from these components. 
You will create components classes for the Menu and Cart pages of the Coffee Cart. 

For the Menu page you will create "Header", "Menu List", "Cup" and "TotalCount" components.

![menu page](https://github.com/mate-academy/qa_pw_composition_coffee-cart/blob/main/MenuPage.png). 



## Preparation

1. Open the forked repo in VSCode.
2. Create a new branch by running git checkout -b task_solution.
3. Run the installation commands:

    - `npm ci`
    - `npx playwright install`

## Task

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
