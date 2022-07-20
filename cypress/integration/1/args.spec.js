it('passes env vars through the -a flag correctly', () => {
  cy.wrap(Cypress.env('foo')).should('eq', 'bar');
});

it('passes config through the -a flag correctly', () => {
  cy.wrap(Cypress.config('downloadsFolder')).should('contain', 'foo/bar');
});
