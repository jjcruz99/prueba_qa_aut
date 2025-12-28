describe ('Validar campos obligatorios en el formulario de login', () => { 

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
     });    

    it('Intenta iniciar sesión sin ingresar usuario ni contraseña', () => { 
       cy.get('#user-name').clear();
       cy.get('[name="password"]').clear();
       cy.get('#login-button').click();
       cy.contains('h3','Username is required')
        .should('be.visible');
    });

    it('Intenta iniciar sesión sin ingresar contraseña', () => { 
       cy.get('#user-name').clear().type('standard_user');
       cy.get('[name="password"]').clear();
       cy.get('#login-button').click();
       cy.contains('h3','Password is required')
        .should('be.visible');
    });

    it('Intenta iniciar sesión sin ingresar usuario', () => { 
       cy.get('#user-name').clear();
       cy.get('[name="password"]').clear().type('secret_sauce');
       cy.get('#login-button').click();
       cy.contains('h3','Username is required')
        .should('be.visible');
    });

});