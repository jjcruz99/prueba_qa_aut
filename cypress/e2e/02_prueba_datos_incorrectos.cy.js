describe ('Prueba datos icorrectos en el formulario de login', () => { 

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
     });

    it('Intentar iniciar sesion contraseña incorrecta', () => { 
        cy.get('#user-name').clear().type('standard_user');
        cy.get('[name="password"]').clear().type('wrong_password');
        cy.get('[name="login-button"]').click();

        //? Verificar que el mensaje de error sea visible
        cy.get('h3[data-test="error"]')
            .should('be.visible')
            .and('contain','Epic sadface: Username and password do not match any user in this service');
    
    });

    it('Intentar iniciar sesion usuario incorrecto', () => { 
        cy.get('[name="user-name"]').clear().type('wrong_user');
        cy.get('[name="password"]').clear().type('secret_sauce');
        cy.get('input[type="submit"]').click();

        //? Verificar que el mensaje de error sea visible
        cy.get('.error-message-container.error') //conteneddor padre
            .find('h3[data-test="error"]') //hijo
            .should('be.visible')
            .and('have.text','Epic sadface: Username and password do not match any user in this service');
    });

});