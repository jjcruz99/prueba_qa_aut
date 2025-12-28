describe('Prueba de la API reqres.in/api/ (Flujo Completo)', () => { 

    const url = 'https://reqres.in/api';
    const usuario = {
        "name": "Test User",
        "job": "Automation Engineer"
    };

    // Define los headers requeridos por la API.
    
    const headers = {
        // Añadimos el header de la documentación:
        'x-api-key': 'YOUR_API_KEY', 
        'Content-Type': 'application/json' // Especifica el tipo de cuerpo para el POST
    };

    it('Flujo completo: Crear usuario (POST) y obtenerlo por ID (GET)', () => { 

    });
  
});