describe('TODO App', () => {
  const S = {
    title: '[data-cy="title"]',
    menueLink: '.p-menuitem-link',
    toDoInputField: '[data-cy="todo-text"]'
  };

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('Test welcome page', () => {
    cy.get(S.title).should('have.text', 'welcome!');
    cy.url().should('include', '/home');
  });

  it.skip('should check navigation labels', () => {
    cy.get(S.menuLink).contains('have.text', ['Home', 'Todo list', 'Posts', 'Gallery', 'About']);
    // .should('have.attr', 'href').and('include', 'contact')
    });

  it('Test TodoPage', () => {
    cy.visit('http://localhost:4200/todo');

    cy.get(S.title).should('have.text', 'Todo list');
    cy.get(S.toDoInputField).type('Test item');
    cy.get('[data-cy="add-btn"]').click();
    cy.get(S.toDoInputField).type('First item');
    cy.get('[data-cy="add-btn"]').click();
    cy.get(S.toDoInputField).type('Second item');
    cy.get('[data-cy="add-btn"]').click();
    cy.get('[data-cy="delete-btn"]').first().click();
    cy.wait(500);
    cy.get('[data-cy="edit-btn"]').first().click();
    cy.get('[data-cy="edit-text"]').clear().type('New text');
    cy.get('[data-cy="save-btn"]').click();
    cy.get('[data-cy="label"]').first().should('have.text', 'New text');

    //cy.get(S.todoItem).should('have.length', 2);
  });

  it('Test PostsPage', () => {
    cy.visit('http://localhost:4200/posts');

    cy.get(S.title).should('have.text', 'Posts');
   });

  it('Test GalleryPage', () => {
    cy.visit('http://localhost:4200/gallery');

    cy.get(S.title).should('have.text', 'Gallery');
  });

  it('Test AboutPage', () => {
    cy.visit('http://localhost:4200/about');

    cy.get(S.title).should('have.text', 'About');
  });

});
