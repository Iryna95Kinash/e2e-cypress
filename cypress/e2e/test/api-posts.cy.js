const apiPosts = `http://localhost:4200/api/posts`;

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

});
