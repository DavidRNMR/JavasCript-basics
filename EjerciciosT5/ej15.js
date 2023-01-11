boton.addEventListener("click",validar);

function validar(){

    let patron = /^[^\s]{8}$/;

    if(patron.test(identificador.value)){
        alert("correcto")
    }
    else{
        alert("incorrecto")
    }
}
