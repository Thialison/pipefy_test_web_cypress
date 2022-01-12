/* global Given, Then, When */
import faker from 'faker-br';
import helpers from '../../support/helpers';
import messages from '../../fixtures/messages/form';

Given('que acesso o formulario', () => {
  cy.visit('/public/form/6qhKljB1');
});

When('efetuo o envio do formulario preenchido', () => {
  cy.fillName(faker.name.firstName());
  cy.fillComment(faker.random.words(10));
  cy.addUser('Thialison');
  cy.selectOptionRadioButton('B');
  cy.selectDate(helpers.dateInNextDays(2).format('DD/MM/YYYY'));
  cy.selectOption('B');
  cy.fillInputTimeNow();
  cy.uploadLocalFile('images/test_image.jpg');
  cy.fillPhone(faker.phone.phoneNumber('#### #####'), 'Germany');
  cy.submitForm();
  cy.fillEmail(faker.internet.email());
  cy.sendForm();
});

Then('visualizo a mensagem de confirmacao', () => {
  cy.contains(messages.submitConfirmation).should('be.visible');
});
