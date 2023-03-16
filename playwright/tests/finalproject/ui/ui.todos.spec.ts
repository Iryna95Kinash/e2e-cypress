import { test, expect } from '@playwright/test';

const S = {
  todosItem: '[class="view"]',
  todosInput: '[class="new-todo"]',
  deleteTodosBtn: '[class="destroy"]',
 };

test.describe('Todos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/react/#');
  });

  test('Add 4 todo items', async ({ page }) => {
    await page.locator(S.todosInput).fill('item 1');
    await page.locator(S.todosInput).press('Enter');

    await page.locator(S.todosInput).fill('item 2');
    await page.locator(S.todosInput).press('Enter');

    await page.locator(S.todosInput).fill('item 3');
    await page.locator(S.todosInput).press('Enter');

    await page.locator(S.todosInput).fill('item 4');
    await page.locator(S.todosInput).press('Enter');

    const todosItems = await page.locator(S.todosItem).count();
    await expect(todosItems).toBe(4);
  });

  test('Edit todos item', async ({ page }) => {
    const newText = 'New Text';

    await page.locator(S.todosInput).fill('item 1');
    await page.locator(S.todosInput).press('Enter');

    const firstTodosItem = await page.locator(S.todosItem).nth(0);
    await firstTodosItem.locator('label').dblclick({ force: true });

    await page.pause();

    await firstTodosItem.locator('..').locator('[class="edit"]').fill(newText);
    await firstTodosItem.locator('..').locator('[class="edit"]').press('Enter');

    await expect(firstTodosItem).toContainText(newText);
  });

  test('Delete todos item', async ({ page }) => {
    await page.locator(S.todosInput).fill('item 1');
    await page.locator(S.todosInput).press('Enter');

    await page.locator(S.todosInput).fill('item 2');
    await page.locator(S.todosInput).press('Enter');

    await expect(await page.locator(S.todosItem).count()).toBe(2);

    const firstTodosItem = await page.locator(S.todosItem).nth(0);
    await firstTodosItem.hover();
    await firstTodosItem.locator(S.deleteTodosBtn).click();

    await expect(await page.locator(S.todosItem).count()).toBe(1);
  });
});
