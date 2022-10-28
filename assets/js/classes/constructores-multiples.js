class Persona {

    static porObjeto({nombre,apellido,pais}){
        return new Persona(nombre,apellido,pais);
    }


    constructor(nombre, apellido, pais) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;

    }

    getInfo() {

    console.log(`info: ${this.nombre},
    ${this.apellido},${this.pais}`);
    }
}


const nombre1 = 'Melisa',
    apellido1 = 'Riv',
    pais1 = 'españa';


const fer = {
    nombre :'fer',
    apellido: 'herr',
    pais: 'costa'

    }



const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(fer);

persona1.getInfo();
persona2.getInfo();
