comprobar.addEventListener("click",validar);

function validar (){

    let patron= /\d/;
    let letra = /[A-ZÑ]/;

    if(patron.test(mayuscula.value) && letra.test(mayuscula.value)){
        alert("correcto")
    }
    else{
        alert("incorrecto")
    }


    
}