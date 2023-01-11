comprobar.addEventListener("click",validar);

function validar (){

    let patron=/\d/;

    if(patron.test(texto.value)){
        alert("es valido")
    }
    else{
        alert("no lo es")
    }
}