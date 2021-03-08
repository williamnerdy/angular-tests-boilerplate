import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { HomePage } from '../pages/home.page';

Given('que acesso a tela inicial da aplicação', () => {
  cy.visit('/');
});

When('clicar no botão incrementar', () => {
  HomePage.clicarBotaoIncrementar();
});

Then('o valor deve ser adicionado 1', () => {
  HomePage.getValorContador().should('contain', '1');
});
