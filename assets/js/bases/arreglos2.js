let juegos = ['´zelda','mario','metroid','Chrono'];
console.log('largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos [juegos.length-1];

console.log({primero,ultimo});


//recorrer
juegos.forEach((elemento,indice,arr)=>{
    console.log({elemento,indice,arr});
});

//añadir al final
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud,juegos});

//añadir al inicio del array
juegos.unshift('Fire Emblem');
console.log({nuevaLongitud,juegos});

//borrar el ultimo
let juegoBorrado=juegos.pop();
console.log({juegoBorrado,juegos});

let posicion =1;

//borrar por posicion y cantidad de elementos apartir de esa posicion
let juegosBorrados = juegos.splice(posicion,2);
console.log({juegosBorrados,juegos})

//para buscar
let metroidIndex = juegos.indexOf('metroid');


