export const HomePage = {
  getValorContador() {
    return cy.get('.counter-value').first();
  },
  clicarBotaoIncrementar() {
    cy.get('.btn-increment')
      .click({ force: true });
  },
  clicarBotaoDecrementar() {
    cy.get('.btn-decrement')
      .click({ force: true });
  }
}
