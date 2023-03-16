import { test, expect } from '@playwright/test';

const S = {
  pageTitle: '[data-cy="title"]',
  todoInput: '[data-cy="todo-text"]',
  todoItem: '[data-cy="todo-item"]',
  todoItemCheckbox: '.p-checkbox',
  todoItemLabel: '[data-cy="label"]',
  editTodoText: '[data-cy="edit-text"]',
  addTodoBtn: '[data-cy="add-btn"]',
  editTodoBtn: '[data-cy="edit-btn"]',
  saveTodoBtn: '[data-cy="save-btn"]',
  deleteTodoBtn: '[data-cy="delete-btn"]',
  activeTodoItemsBtn: '[data-cy="show-active-btn"]',
  inactiveTodoItemsBtn: '[data-cy="show-inactive-btn"]',
  allTodoItemsBtn: '[data-cy="show-all-btn" ]',
};

test.describe.skip('Todo Filters', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/todo');

    await page.locator(S.todoInput).fill('item 1');
    await page.locator(S.addTodoBtn).click();
    await page.locator(S.todoInput).fill('item 2');
    await page.locator(S.addTodoBtn).click();
    await page.locator(S.todoInput).fill('item 3');
    await page.locator(S.addTodoBtn).click();
    await page.locator(S.todoInput).fill('item 4');
    await page.locator(S.addTodoBtn).click();

    await page.locator(S.todoItem).nth(0).locator(S.todoItemCheckbox).click();
  });

  test('Test Inactive todo filter', async ({ page }) => {
    await page.locator(S.inactiveTodoItemsBtn).click();

    const todoItems = await page.locator(S.todoItem).count();
    await page.pause();
    await expect(todoItems).toBe(1);
  });

  test('Test Active todo filter', async ({ page }) => {
    await page.locator(S.activeTodoItemsBtn).click();

    const todoItems = await page.locator(S.todoItem).count();
    await page.pause();
    await expect(todoItems).toBe(3);
  });

  test('Test All todo filter', async ({ page }) => {
    await page.locator(S.allTodoItemsBtn).click();

    const todoItems = await page.locator(S.todoItem).count();
    await page.pause();
    await expect(todoItems).toBe(4);
  });
});
