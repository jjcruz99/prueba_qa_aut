async function obtenerColeccion(){
    const response = await fetch('https://reqres.in/api/collections/collection-1', {
    headers: { 'x-api-key': 'dev_2551a7cca1a0e86bef88f4480581b7e81768470e95aaaf79' },
    });
    const data = await response.json();
    console.log(data);
    
}

async function obtenerRecordsPorId(){
    const response = await fetch('https://reqres.in/api/collections/collection-1/records/82d60b7d-c029-470e-9dae-a4cdea14dae0', {
    headers: { 'x-api-key': 'dev_pub_a145e1fae115de05afc1dc61454e15f0' },
    });
    const respuestaEnFormatoJSON = await response.json();
    console.log(respuestaEnFormatoJSON);
    //console.log(`Record obtenido con tags: ${respuestaEnFormatoJSON.data.data.tags}`);
}

async function crearUsuario(){

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
}

//obtenerColeccion();
obtenerRecordsPorId();
//crearUsuario();