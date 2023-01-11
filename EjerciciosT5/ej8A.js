function consultar (){

    let elementos = formulario.length;
    let total = formulario.elements;


    for(let i=0;i<elementos;i++){

        if(total[i].value=="C"){
            info.innerHTML ="La provincia seleccionada es La Coruña"
        }
        else if(total[i].value=="LU"){
            info.innerHTML = "La provincia seleccionada es Lugo";
        }
        else if (total[i].value=="OU"){
            info.innerHTML = "La provincia seleccionada es Ourense";
        }
        else if(total[i].value=="PO") {
            info.innerHTML = "La provincia seleccionada es Pontevedra";
        }
    }
}