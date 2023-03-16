import { expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';


test.describe.skip('Posts API', () => {
  test('GET /api/posts', async ({ request }) => {
    const response = await request.get('/api/posts');
    const posts = await response.json();

    //console.log(posts);

    await expect(response.status()).toBe(200);
    await expect(posts.length).toBe(100);
  });

  test('GET /api/posts/:postId', async ({ request }) => {
     const postId = 3;
     const response = await request.get(`/api/posts/${postId}`);
     const post = await response.json();

     await expect(response.status()).toBe(200);
     await expect(post).toEqual({
      userId: 1,
      id: postId,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
     });
  });

  test('POST /api/posts', async ({ request }) => {
      const newPostData = {
        userId: 1,
        title: faker.lorem.sentences(),
        body: faker.lorem.text(),
      };

      console.log(newPostData)

      const response = await request.post('/api/posts', { data: { ...newPostData } });
      const newPost = await response.json();

      await expect(response.status()).toBe(201);
      await expect(newPost).toEqual({ ...newPost, id: 101 });
  });

  test('PATCH /api/posts', async ({ request }) => {
      const editPostData = {
        userId: 1,
        title: faker.lorem.sentences(),
        body: faker.lorem.text(),
      };

      console.log(editPostData)

      const response = await request.post('/api/posts', { data: { ...editPostData } });

      await expect(response.status()).toBe(201);
  });

  test('DELETE /api/posts', async ({ request }) => {
      const deletePostData = {
        userId: 1,
        title: faker.lorem.sentences(),
        body: faker.lorem.text(),
      };

      console.log(deletePostData)

      const response = await request.post('/api/posts', { data: { ...deletePostData } });

      await expect(response.status()).toBe(201);
  });

  test('GET /api/posts/1/comments', async ({ request }) => {
    const response = await request.get('/api/posts/1/comments');
    const posts = await response.json();

    await expect(response.status()).toBe(200);
    await expect(posts.length).toBe(5);
  });

});
