comprobar.addEventListener("click",validar);

function validar (){

    let patron = /^\d{4}-?[A-Z]{3}$/;

    let vocales = /[^AEIOU]{3}$/;

    if(patron.test(matricula.value) && vocales.test(matricula.value)){

        alert("es correcto");
    }
    else{
        alert("es incorrecto");
    }
}