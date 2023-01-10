const salud = (valor) => {

  let elementos = datos_salud.length;

  let total= datos_salud.elements;

  demo.innerHTML = "el numero de elementos es " + elementos;
  
  for(let i =0;i<elementos;i++){

    if(total[i].type=="checkbox"){

        total[i].checked = valor;

    }
  }
}

const vidaSana = () =>{

    salud(true);
}

const vidaInSana = () =>{

    salud(false);
}