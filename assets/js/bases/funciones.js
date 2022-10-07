function saludar(nombre) {
    console.log('Hola ' , nombre);
    return 1;
}

//funcion anonima
const saludar2 = function(nombre) {
    console.log('hola ' + nombre);
}

//funcion de flecha
const saludarFlecha = ()=>{
console.log('hola flecha');
}

//funcion de flecha con parametro
const saludarFlecha2 = (nombre)=>{
console.log('Hola ',nombre);
} 


saludar('david');
saludar2('david');
saludarFlecha();
saludarFlecha2('Paco');


//funciones de diferentes manera

function sumar (a,b){
    return a+b;
}

const sumar2 = (a,b) => a + b;


const sumar3 = (a,b) =>{
 return a+b;
}

console.log( sumar2(1,2) );


//otro ejemplo

function getAleatorio (){
    return Math.random();
}

console.log(getAleatorio());


const getAleatorio2 = ()=> Math.random;

