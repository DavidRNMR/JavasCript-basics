function borrar (){

    let elementos = datos_alumno.length;

    let elementosAlumno = datos_alumno.elements;
    
    demo.innerHTML = "El numero de elementos es " +elementos;

    for(let i=0;i<elementos;i++){

        if(elementosAlumno[i].type=="text" || elementosAlumno[i].type=="date"){
            elementosAlumno[i].value ="";
        }
        if(elementosAlumno[i].type=="radio"){
            elementosAlumno[i].checked=false;
        }
    }
}

function resetear(){

    datos_alumno.reset();
}

