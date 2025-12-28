describe('Prueba de la API reqres.in/api/ (Flujo Completo)', () => { 

    const url = 'https://reqres.in/api';
    const usuario = {
        "name": "Test User",
        "job": "Automation Engineer"
    };

    const headers = {
        // Añadimos el header de la documentación:
        'x-api-key': 'dev_2551a7cca1a0e86bef88f4480581b7e81768470e95aaaf79', 
        'Content-Type': 'application/json' // Especifica el tipo de cuerpo para el POST
    };


    it('Validar que la colección existe (GET)', () => { 
       
        cy.request({
            method: 'GET',
            url: `${url}/collections/collection-1`, 
            headers: headers
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data');
        });
    });


    it('Validar que el recods de la coleccion responde correctamente (GET)', () => { 
       
        cy.request({ 
            method: 'GET',
            url: `${url}/collections/collection-1/records/82d60b7d-c029-470e-9dae-a4cdea14dae0`, 
            headers: headers
        }).then((response) => { 
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('id', '82d60b7d-c029-470e-9dae-a4cdea14dae0'); 
        });

    });

    it('Flujo completo: Crear usuario (POST) y obtenerlo el ID ', () => { 
        cy.request({
            method:'POST',
            url:`${url}/users`,
            headers : headers,
            body: usuario
        }).then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
            //extraer el id generado
            const idGenerado = response.body.id;
            cy.log(`Id generado por la api ${idGenerado}`)
        });
    });
  
});