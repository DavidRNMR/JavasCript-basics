comprobar.addEventListener("click",validar);

function validar (){
    
    let patron=/^\d{3}[\s-]?\d{2}[\s-]?\d{3}$/;

    if(patron.test(ssn.value)){
        prueba.innerHTML = "el texto es correcto";
    }
    else{
        prueba.innerHTML = "el texto es incorrecto";
    }
}