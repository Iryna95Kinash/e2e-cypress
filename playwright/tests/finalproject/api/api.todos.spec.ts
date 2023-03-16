import { expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('API', () => {
  test('GET /api/users/2', async ({ request }) => {
    const response = await request.get(`https://reqres.in/api/users?page=2`);
    const users = await response.json();

    console.log(users);

    await expect(response.status()).toBe(200);
    await expect(users.data.length).toBe(6);
  });

  test('POST /api/users', async ({ request }) => {
      const createUser = {
        userId: 953,
        name: faker.lorem.sentences(),
        job: faker.lorem.text(),
      };

      console.log(createUser)

      const response = await request.post(`https://reqres.in/api/users`, { data: { ...createUser } });
      const newUser = await response.json();

      await expect(response.status()).toBe(201);
      await expect(newUser).toEqual({ ...createUser, id: newUser.id, createdAt: newUser.createdAt });
  });

  test('PATCH /api/users/2', async ({ request }) => {
    const updateUser = {
      userId: 953,
      name: faker.lorem.sentences(),
      job: faker.lorem.text(),
    };

    console.log(updateUser)

    const response = await request.post('https://reqres.in/api/users/2', { data: { ...updateUser } });

    await expect(response.status()).toBe(201);
  });

  test('DELETE /api/users/2', async ({ request }) => {
    const deleteUser = {
      userId: 1,
      title: faker.lorem.sentences(),
      body: faker.lorem.text(),
    };

    console.log(deleteUser)

    const response = await request.post('/api/users/2', { data: { ...deleteUser } });

    await expect(response.status()).toBe(405);
  });
});
