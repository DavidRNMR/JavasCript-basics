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

class Heroe extends Persona{

   clan = 'sin clan';

   constructor(nombre,codigo,frase){

    super(nombre,codigo,frase);
   }
}

const spiderman = new Heroe('Peter','Spider','amigo');

console.log(spiderman);


