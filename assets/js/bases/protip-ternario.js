 const elMayor = (a,b) => (a > b) ? a : b;
 const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares';

 console.log(tieneMembresia(true));
 console.log(elMayor(20,15));

 const amigo = true;
 const amigosArr= [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    elMayor(10,15)
 ];

console.log(amigosArr);

const nota = 65; 
const grado = nota >= 95 ? 'A+' :
              nota >=90 ? 'A' :
              nota >=85 ? 'B+':
              nota >=80 ? 'C' : 'F';

console.log({nota,grado});