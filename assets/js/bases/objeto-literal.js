//objeto
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V','Hulkbuster'],
    direccion: {
        zip: '10880,90265',
        ubicacion: 'Malibu, California'
    },
    'ulitma-pelicula': 'Infiniti War'
};

console.log('Nombre',personaje);
console.log('Edad', personaje.edad);
console.log('Coordenadas', personaje.coords.lat);
console.log('NumDeTrajes', personaje.trajes.length);
console.log('ultimo traje', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';

console.log('Vivo',personaje[x]);
console.log('Ultima pelicula', personaje["ulitma-pelicula"]);

//borra la propiedad
delete personaje.edad;

console.log(personaje);

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//conjela el objecto para no modificarlo,pero no afecta a los objetos y arrays de dentro
Object.freeze(personaje);

//propiedadees
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades,valores});




