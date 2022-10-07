const carros = ['ford','mazda','honda','toyota'];

let i = 0;

while (i<carros.length){

    console.log(carros[i]);
    i++;
}

console.warn('do while');

let j= 0;

do {
    console.log(carros[0]);   
}
while(carros[j]){
j++;
}