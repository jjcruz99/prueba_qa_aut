describe ('Prueba login exitoso', () => { 

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
     });

     it('Inicia sesión con credenciales válidas', () => {

        //! Ingresar usuario y contraseña válidos
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click()

        //! Verificar que la URL cambió a la página de inventario
        cy.url().should('include', '/inventory.html')

        //! verificar que el título de la página de inventario sea visible
        cy.get('.title')
            .should('be.visible')
            .and('have.text', 'Products');
            
     });
              
});