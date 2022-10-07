const regresaTrue = () =>{
    console.log('regresa true');
    return true;
}
const regresaFalse = () =>{
    console.log('regresa false');
    return false;
}

console.warn('not o la negacion');
console.log((!true));
console.log((!false));
console.log(!regresaFalse());
console.warn('And');//regresa true si todos los valores son true
console.log(true && true); //true
console.log(true && false); //false
console.log('---------------');
console.log(regresaFalse() && regresaTrue());//false
console.log(regresaTrue() && regresaFalse());//false
console.warn('OR');//true
console.log(true || false);
console.log(regresaTrue() || regresaFalse());

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo';//devuelve la ultima variable
const a2 = false && 'Hola mundo';//devuelve falso

console.log(a2);




