function consultarDatos(){

let elementos = formulario.length;

for(let i=0;i<elementos;i++){

    if(formulario.actores[i].checked){
        alert(formulario.actores[i].value);
    }
}
}