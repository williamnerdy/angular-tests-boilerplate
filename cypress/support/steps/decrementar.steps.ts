import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { HomePage } from '../pages/home.page';

Given('que acesso a tela inicial da aplicação', () => {
  cy.visit('/');
});

When('clicar no botão decrementar', () => {
  HomePage.clicarBotaoDecrementar();
});

Then('o valor deve ser subtraído 1', () => {
  HomePage.getValorContador().should('contain', '-1');
});
