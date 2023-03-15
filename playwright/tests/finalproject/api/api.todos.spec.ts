import { expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('API', () => {
  test('GET /api/users/2', async ({ request }) => {
    const response = await request.get('/api/users/2');
//     const users = await response.json();
//
//     console.log(users);

//     await expect(response.status()).toBe(200);
//     await expect(users.length).toBe(6);
  });

  test('POST /api/users', async ({ request }) => {
        const createUser = {
          userId: 953,
          title: faker.lorem.sentences(),
          body: faker.lorem.text(),
        };

        console.log(createUser)

        const response = await request.post('/api/users', { data: { ...createUser } });
//         const newUser = await response.json();
//
//         await expect(response.status()).toBe(201);
//         await expect(newUser).toEqual({ ...newUser, id: 201 });
    });
});
