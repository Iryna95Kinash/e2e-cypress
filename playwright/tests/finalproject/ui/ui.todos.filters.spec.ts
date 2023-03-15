import { test, expect } from '@playwright/test';

const S = {
  placeholderTitle: '[placeholder="What needs to be done?")]',
  todosInput: '[class="new-todo"]',
  todosItem: '[class="view"]',
  deleteTodosBtn: '[class="destroy"]',
  todosItemCheckbox: '[type="checkbox"]',
//   completedTodosItemsBtn:
//   activeTodosItemsBtn:
//   allTodosItemsBtn:
//   clearCompletedTodosItemsBtn:
 };

test.describe('Todos Filters', () => {
 test.beforeEach(async ({ page }) => {
   await page.goto('/examples/react/#');

   await page.locator(S.todosInput).fill('item 1');
   await page.locator(S.todosInput).press('Enter');
   await page.locator(S.todosInput).fill('item 2');
   await page.locator(S.todosInput).press('Enter');
   await page.locator(S.todosInput).fill('item 3');
   await page.locator(S.todosInput).press('Enter');
   await page.locator(S.todosInput).fill('item 4');
   await page.locator(S.todosInput).press('Enter');

   await page.locator(S.todosItem).nth(0).locator(S.todosItemCheckbox).click();
 });

 test('Test Completed todos filter', async ({ page }) => {
   await page.locator(S.completedTodosItemsBtn).click();

   const todosItems = await page.locator(S.todosItem).count();
   await page.pause();
   await expect(todosItems).toBe(1);
 });

 test('Test Active todos filter', async ({ page }) => {
    await page.locator(S.activeTodosItemsBtn).click();

    const todosItems = await page.locator(S.todosItem).count();
    await page.pause();
    await expect(todosItems).toBe(3);
 });

 test('Test All todos filter', async ({ page }) => {
   await page.locator(S.allTodosItemsBtn).click();

   const todosItems = await page.locator(S.todosItem).count();
   await page.pause();
   await expect(todosItems).toBe(4);
  });

  test('Test Clear Completed btn', async ({ page }) => {
     await page.locator(S.clearCompletedTodosItemsBtn).click();

     const todosItems = await page.locator(S.todosItem).count();
     await page.pause();
     await expect(todosItems).toBe(3);
    });
});
