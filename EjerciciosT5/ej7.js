const consultarVida =() =>{

    let elementos = datos_salud.elements;

    let total = datos_salud.length;

    let cont =0;

    for(let i =0;i<total;i++){

        if(elementos[i].type=="checkbox" && elementos[i].checked==true){
            cont++
        }
    }
    if(cont>=3){
        datos_salud.sana.checked=true;
    }
    else if (cont==2){
        datos_salud.pocosana.checked=true;
    }
    else if (cont<2){
        datos_salud.insana.checked=true;
    }
}