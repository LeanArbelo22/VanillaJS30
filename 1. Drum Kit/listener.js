window.addEventListener('keydown', function(e){
    //console.log(e.key); key = boton del teclado presionado; code = KeyA por ej. minuscula y mayus

    /* PARA REPRODUCIR EL AUDIO SEGUN LA KEY PRESIONADA */

    const audio = document.querySelector(`audio[data-key="${e.code}"]`); // [data-key] atribute selector 
    //console.log(audio); elemento audio utilizado
    
    if(!audio) return; // detiene la funcion si no hay audio
    audio.currentTime = 0; // rebobina al comienzo. sin esto no puede repetirse muchas veces
    audio.play();

    /* PARA APLICAR EFECTOS CSS AL PRESIONAR LA KEY */
    
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    //console.log(key); similar a audio
    
    key.classList.add('playing'); // agregar una clase, con jQuery seria .addClass('');
});

const keys = document.querySelectorAll('.key'); // todos los elementos con clase key
function removeTransition(e){
    //console.log(e); lista de todo lo que se modifica al realizar el evento (cambios en el css)
    //console.log(this); this = key actual (mencionada en el forEach que sigue)
    
    if(e.propertyName !== 'transform') return; // lo ignora si no es transform
    //console.log(e.propertyName); si el transform durara 2s, se mostraria por consola luego de 2s = transitionend
    
    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition))