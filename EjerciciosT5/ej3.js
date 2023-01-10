function numElem(){

    let radio = formulario.ciudad;

    demo.innerHTML ="el numero de ratios son "+ radio.length +"<br>";
    demo.innerHTML +="el elemento seleccionado es el "+radio.value +"<br>";

    for(let i=0;i<radio.length;i++){
        demo.innerHTML += "El elemento " +i+ " vale " + radio[i].checked 
        + " y el defaultChecked vale " + radio[i].defaultChecked + "<br>";
    }
}