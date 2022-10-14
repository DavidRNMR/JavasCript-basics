
class Persona{

  static _conteo =0;
  static get conteo(){
    return Persona._conteo + ' instancias';
  }

  static mensaje (){
    console.log();
  }

    //atributos

  nombre = '';
  codigo = '';
  frase = '';


  //constructor

    constructor (nombre,codigo,frase){

    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    }

    //gets y sets

    set setComidaFavorita(comida){

        this.comida = comida;
    }

    get getComidaFavorita(){

        return `la comida favorita de ${this.nombre}
        es ${this.comida}`;
    }


    quienSoy(){
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        console.log(`${this.codigo} dice ${this.frase}`);
    }
}

const spiderman = new Persona('hola','adios','amigo');
const ironman = new Persona('tony','ironman','soy ironman');


spiderman.miFrase();
spiderman.setComidaFavorita = 'Pastel de cereza';

console.log('conteo statico',Persona._conteo);
console.log(Persona._conteo);
Persona.mensaje();