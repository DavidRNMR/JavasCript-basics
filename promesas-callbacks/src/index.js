import './styles.css';
import {buscarHeroe} from './js/callback';

const heroeId = 'capi';


//una promesa es una funcion que se pasa como argumento
buscarHeroe(heroeId, (heroe)=> {

    console.log(heroe);
});
