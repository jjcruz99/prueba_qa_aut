describe('Prueba inicial con Cypress', () => {

  it('Visita la página de Sauce Demo y verifica el título', () => {
    cy.visit('https://www.saucedemo.com/');  
  });

});//cierre describe