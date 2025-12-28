/**
 * Obtiene una coleccion de los tres endpoints de prueba los tres metodos retorna un JSON.
 * @returns {json} data - La coleccion obtenida desde el endpoint.
 */


export async function obtenerColeccion(){
    try{
        const response = await fetch('https://reqres.in/api/collections/collection-1', {
        headers: { 'x-api-key': 'dev_2551a7cca1a0e86bef88f4480581b7e81768470e95aaaf79' },
        });

        if (response.status !== 200) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error){
        console.error('Error al obtener la coleccion: ', error);
        return null;
    }
}

export async function obtenerRecordsPorId(){
    try{
        const response = await fetch('https://reqres.in/api/collections/collection-1/records/82d60b7d-c029-470e-9dae-a4cdea14dae0', {
    headers: { 'x-api-key': 'dev_pub_a145e1fae115de05afc1dc61454e15f0' },
    });
    const respuestaEnFormatoJSON = await response.json();
    console.log(respuestaEnFormatoJSON);
    //console.log(`Record obtenido con tags: ${respuestaEnFormatoJSON.data.data.tags}`);
    return respuestaEnFormatoJSON;
    }
    catch(error){
        console.error('Error al obtener el record por ID: ', error);
        return null;
    }
}

export async function crearUsuario(){
    try{
        const usuario = {
                    "name": "Test User", 
                    "job": "Automation Engineer"
                    };
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json',
                'x-api-key': 'dev_2551a7cca1a0e86bef88f4480581b7e81768470e95aaaf79'
            },
            body: JSON.stringify(usuario)
        });

        const data = await response.json();
        console.log(data);
        console.log(`Usuario creado con ID: ${data.id}`);
        return data;
    }
    catch(error){
        console.error('Error al crear el usuario: ', error);
        return null;
    }
}

obtenerColeccion();
obtenerRecordsPorId();
crearUsuario();