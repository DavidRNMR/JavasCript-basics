
//patron modulo, se hace para proteger el código
//consiste en meter todo el código dentro de la 
//función anónima

(() => {

    'use strict'

    let deck = [];
    const tipos = ['C','D','H','S'];
    const especiales = ['A','J','Q','K'];
    
    let puntosJugador =0;
    let puntosOrdenador =0;
    
    //referencias del html
    const btnPedir = document.querySelector('#btnPedir');
    const btnDetener = document.querySelector('#btnDetener');
    const btnNuevo = document.querySelector('#btnNuevo');
    
    const divCartasJugador = document.querySelector('#jugador-cartas');
    const divcartasComputadora = document.querySelector('#computadora-cartas')
    
    const puntosHTML= document.querySelectorAll('small');
    
    const crearDeck= ()=>{
    
    for(let i=2; i<=10;i++){
    
        for (let tipo of tipos){
    
            deck.push(i+tipo);
        }  
    }
        for (let tipo of tipos){
            for(let esp of especiales){
    
                deck.push(esp+tipo);
            }
        }
    deck = _.shuffle(deck);
    
    return deck;
    
    }
    
    crearDeck();
    
    //esta funcion me permite pedirCarta
    
    const pedirCarta = ()=> {
    
        if(deck.length===0){
            throw 'no hay cartas';
        }
        const carta = deck.pop();
        
        return carta;
    }
        //pedirCarta();
    
        const valorCarta = (carta)=>{
            
          const valor = carta.substring(0,carta.length-1);
            
          return (isNaN (valor)) ?
          (valor ==='A')? 11 : 10
          : valor * 1;      
    }
      
    //turno del ordenador
    
    const turnoOrdenador = (puntosMinimos)=>{
    
        do{
    
        const carta = pedirCarta();
        puntosOrdenador = puntosOrdenador + valorCarta(carta);
        puntosHTML[1].innerText = puntosJugador;
        
        // <!-- <img  class="carta" src="assets/cartas/2C.png"alt=""> -->
        
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        
        divcartasComputadora.append(imgCarta);
    
            if(puntosMinimos > 21){
                break;
            }
    
        }
        while((puntosOrdenador<puntosMinimos) && (puntosMinimos<=21) ); 
    
    
        //hacer que el alert salga más tarde
    
        setTimeout(() => {
            
        if(puntosOrdenador===puntosMinimos){
            alert('empate')
        }
        else if(puntosMinimos>21){
            alert('Ordenador gana');
        }
        else if(puntosOrdenador>21){
            alert('Jugador gana');
        }
        else{
            alert('ordenador gana');
        }
    }, 10);
    }
    
       
    //eventos
    
    //listener del boton pedir carta
    btnPedir.addEventListener('click',() =>{
    
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;
    
    // <!-- <img  class="carta" src="assets/cartas/2C.png"alt=""> -->
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    
    divCartasJugador.append(imgCarta);
    
    //controlar los puntos
    if(puntosJugador>21){
        
        btnPedir.disabled =true;
        turnoOrdenador(puntosJugador);
    }
    else if (puntosJugador===21){
        
        btnPedir.disabled =true;
        turnoOrdenador(puntosJugador);
    }
    });
    
    ///listener del boton detener
    
    btnDetener.addEventListener('click',()=>{
        
        btnPedir.disabled =true;
        btnDetener.disabled =true;
    
        turnoOrdenador(puntosJugador);
    
    });
    
    //listener del boton nuevo juega
    
    btnNuevo.addEventListener('click',()=>{
    
        deck = [];
        deck = crearDeck()
    
        puntosJugador = 0;
        puntosOrdenador = 0;
        puntosHTML[0].innerText = 0;
        puntosHTML [1].innerText = 0;
        divcartasComputadora.innerHTML= '';
        divCartasJugador.innerHTML= '';
    
    
        btnPedir.disabled =false;
        btnDetener.disabled =false;
    
    });

})();









