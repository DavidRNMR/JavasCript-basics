comprobar.addEventListener("click",validar);

function validar(){

    let patron=/^\d{8}-?[A-Z]{1}$/;

    let letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
      let numeroDNI;
      let resto;
      let letraDNI; 
  
         numeroDNI=parseInt(dni.value.substr(0,8));

         resto=numeroDNI%23;

         letraDNI=dni.value.substr(dni.value.length-1);
      
         if (patron.test(dni.value) && letraDNI==letras[resto]) {
            alert ("El dato introducido es correto");
         } 
         else {
            alert ("El dato introducido no es correto");
         }
}
