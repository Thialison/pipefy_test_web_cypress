/// <reference types="Cypress" />

import el from '../elements/form_interview_elements';
import helpers from '../../support/helpers';
import 'cypress-file-upload';

Cypress.Commands.add('fillName', (name) => {
  cy.get(el.inputName).type(name);
});

Cypress.Commands.add('fillComment', (text) => {
  cy.get(el.txtAreaComment).type(text);
});

Cypress.Commands.add('selectOptionRadioButton', (option) => {
  cy.get(el.checkBoxOptions).siblings('label').contains(option, { matchCase: false }).click();
});

Cypress.Commands.add('addUser', (name) => {
  cy.get(el.labelSelectAnyUser).click();
  cy.get(el.inputFilterUsers).type(name);
  cy.get(el.listUsers).contains(name).click();
});

Cypress.Commands.add('selectDate', (date) => {
  cy.get(el.inputCalendar).click();
  cy.get(el.inputDate).type(date);
  cy.get(el.actionButtonsCalendar).contains('Salvar').click();
});

Cypress.Commands.add('selectOption', (option) => {
  cy.get(el.selectOptionB).select(option);
});

Cypress.Commands.add('fillInputTimeNow', () => {
  cy.get(el.inputTimeNow).type(helpers.dateInNextDays().format('HH:mm'));
});

Cypress.Commands.add('uploadLocalFile', (filePath) => {
  cy.get(el.uploadFiles).attachFile(filePath, { subjectType: 'drag-n-drop' });
});

Cypress.Commands.add('fillPhone', (phoneNumber, country = 'Brazil') => {
  cy.get(el.selectedCountry).click();
  cy.get(el.countryList).contains(country).trigger('mouseover').click();
  cy.get(el.inputPhoneNumber).type(phoneNumber);
});

Cypress.Commands.add('fillEmail', (email) => {
  cy.get(el.inputMail).type(email);
});

Cypress.Commands.add('submitForm', () => {
  cy.get(el.buttonSubmitForm).contains('Submit').click();
});

Cypress.Commands.add('sendForm', () => {
  cy.get(el.buttonSubmitForm).contains('Enviar').click();
});
