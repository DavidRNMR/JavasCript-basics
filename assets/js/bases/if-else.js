let a = 5;

if(a>10){
    console.log('A es mayor que 10');
}
else{
    console.log('fin de programa');
}

const hoy = new Date();

let dia = hoy.getDay();

console.log({dia});

if(dia===0){ //triple igual valora el valor interno y el tipado

    console.log('domingo');
}
else{
    console.log('no es domingo');
}

const diaSemana = {
    domingo:0,
    lunes:1,
    martes:2,
    miercoles:3,
    jueves:4,
    viernes:5,
    sabado:6   
}
console.log(diaSemana)