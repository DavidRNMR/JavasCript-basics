function cambios (){

    let elementos = formulario.length;

    let elementosFormu = formulario.elements;

    let cambio = false;

    let texto = "";

    for(let i =0;i<elementos;i++){

        if(elementosFormu[i].type=="checkbox"){

            if(elementosFormu[i].checked != elementosFormu[i].defaultChecked){
                cambio = true;

                texto += "el elemento " + i + " ha cambiado. La situación inicial era "
                + elementosFormu[i].defaultChecked + " y ahora es " + elementosFormu[i].checked + "<br>";  
            }
        }
    }
    if(cambio){
        demo.innerHTML += texto;
    } 
    else{
        demo.innerHTML += "no ha cambiado nada";
    }
}