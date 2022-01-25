// eliminacion de rebotes
/* en este ejemplo: usar el evento 'scroll' implica que el evento 
se dispare muchas veces en muy poco tiempo, con la funcion debounce vamos a forzar que
la funcion checkSlide (la que capta el evento) se ejecute cada 20ms. 
Sin el dobunce la funcion de disparaba aprox entre 30 y 75 veces haciendo scroll de principio a fin,
con debounce solo se dispara entre 1 y 10 */
function debounce(func, wait = 15, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}

const slidesImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    // console.log(e);
    // console.count(e); 
    //console.log(window.scrollY); // muestra cuantos px se desplazaron hasta el top del viewport (necesitamos el bottom)
    
    slidesImages.forEach(slideImage => {
        /* hay que especificar en que punto del scroll se va a comenzar a mostrar el slide 
        (determinar qué tan lejos se está desplazando la página hacia abajo (window.scrollY + window.innerHeight)) */
        // Mitad de la imagen
        /* 👇 esto nos dará los píxeles de cuando cada una de las imágenes debe deslizarse hacia adentro */
        const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
        //console.log(slideInAt);
        // Bottom de la imagen
        /* si nos desplazamos más allá de la imagen, debería deslizarse hacia afuera nuevamente */
        const imageBottom = slideImage.offsetTop + slideImage.height; /* a cuantos px esta el top de la
        img del top de la pagina (+ .height da como resultado donde se encuentra el bottom de img)  */
        // Comprobaciones e if
        const isHalfShown = slideInAt > slideImage.offsetTop; // if true: ya paso el top de la imagen actual
        const isNotScrolledPast = window.scrollY < imageBottom; // if true: no nos deplazamos mas alla de la imagen (no paso el bottom)
        if(isHalfShown && isNotScrolledPast){
            slideImage.classList.add('active');
        } else{
            slideImage.classList.remove('active');
            // significa que o no llegamos a la imagen aun o ya pasamos su bottom
        }

    })
}

window.addEventListener('scroll', debounce(checkSlide))