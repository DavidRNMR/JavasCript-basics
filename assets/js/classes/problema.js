const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad:: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15
}

const melissa = {
    nombre: 'Melissa',
    edad: 35
}

//fher.imprimir();

function Persona (nombre, edad){
    
    this.nombre = nombre;
    this.edad = edad;

    console.log('se ejecuto esta linea');


}

const maria =  new Persona('Maria',18);
console.log(maria);
maria.imprimir();