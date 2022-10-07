// function crearPersona (nombre,apellido){
//     return {
//         nombre,
//         apellido
//     }
// }

//funcion de flecha

const crearPersona = (nombre,apellido)=>({nombre,apellido});


const persona = crearPersona('david','rivera');
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (...args) =>{
    console.log(args);
}

imprimeArgumentos2(10,true,true,'David','Hola');


const imprimeArgumentos3 = (edad,...args)=>{
    //console.log({edad,args});
    return args;
}

const [casado,vivo,nombre,saludo] = imprimeArgumentos3(10,true,false,'david','Hola');
console.log({casado,vivo,nombre,saludo});

const {apellido: nuevoApellido} = crearPersona('david','rivera');
console.log(nuevoApellido);


const tony = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V','Hulkbuster'],
};

const imprimePropiedades = ({nombre,codeName,vivo,edad,trajes})=> {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);