

function valores(){
    let elementos = formulario.length;
    
    let elementosFormu = formulario.elements;
    
    demo.innerHTML ="el numero de elementos es " + elementos + "<br>";

    for(let i =0;i<elementos;i++){
    
        if(elementosFormu[i].type=="checkbox"){
        demo.innerHTML += i+ " checked " + elementosFormu[i].checked
        + " defaultChecked " + elementosFormu[i].defaultChecked + "<br>";
    }
}

}