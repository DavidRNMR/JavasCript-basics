comprobar.addEventListener("click",validar);
ssn.addEventListener("click",borrar)
function validar(){

    let patron=/^\d{3}[\s-]?\d{2}[\s-]?\d{3}$/;

    if(patron.test(ssn.value)){
        alert("es correcto");
    }
    else{
        alert("es incorrecto");
    }
}
function borrar(){
    ssn.value="";
}