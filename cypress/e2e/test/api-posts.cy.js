const apiPosts = `http://localhost:4200/api/posts`;

// $ yarn add @faker-js/faker --dev
// $ yarn add @types/faker -D

describe('TODO App', () => {
  context('GET /api/posts', () => {
    it('gets a list of posts', () => {
      cy.request('GET', apiPosts).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.length).to.eq(100);
      });
    });
  });

  context('GET /api/posts/:postId', () => {
    it('get a post', () => {
      const postId = 2;
      cy.request('GET', `http://localhost:4200/api/posts/${postId}`).then((response) => {
        expect(response.status).to.eq(200);
        console.log(response);
        expect(response.body).to.deep.equal({
          userId: 1,
          id: postId,
          title: 'qui est esse',
          body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
        });
      });
    });
  });

  context('POST /posts', () => {
      it('creates a new post', () => {
        const newPost = {
//          cy: request('POST', `http://localhost:4200/api/posts/${postId}`).then((response) => {
//            expect(response.status).to.eq(200);
//            expect(response.body).to.deep.equal({
              userId: 1,
              title: 'New title',
              body: 'somebody that i used to know',
//            });
//          }),
        };
      });
    });

  context('PATCH /posts', () => {
    it('edit a post', () => {
      const newPost = {
        userId: 1,
        title: 'Updated title',
        body: 'Updated description',
      };
    });
  });

  context('DELETE /posts', () => {
      it('delete a post', () => {
      });
  });

  context('GET /api/posts/1/comments', () => {
     it('get comments', () => {
        cy.request('GET', `http://localhost:4200/api/posts/1/comments`).then((response) => {
          expect(response.status).to.eq(200);
          console.log(response);
        });
     });
  });

});
