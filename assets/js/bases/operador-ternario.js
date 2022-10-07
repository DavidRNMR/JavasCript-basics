// dias de la semana abrimos a las 11,
// fines de semana a las 9

const dia = 1; //0 es domingo ....
const horaActual = 11;

let horaApertura;
let mensaje; // esta abierto, esta cerrado, abrimos a las XX

// if(dia ===0 || dia ===6){
   
// if([0,6].includes(dia)){ //devuelve true o false

// console.log('Es fin de semana');
// horaApertura=9;

// }
// else{
//     console.log('Es dia entre semana');
//     horaApertura=11;
// }

horaApertura=([0,6].includes(dia)) ? 9 : 11; //si es sabado o domingo y
   
//son las 9 o si no, es entre    
// if(horaActual >= horaApertura){             //semana y abrimos a las 11                            
//     mensaje='Esta abierto';
// }
// else{
//     mensaje = `esta cerrado, abrimos a las ${horaApertura}`;
// }

mensaje = (horaActual>=horaApertura) ? 'esta abierto' : 
`está cerrado, abrimos a las ${horaApertura}`;


console.log({horaApertura,mensaje});

