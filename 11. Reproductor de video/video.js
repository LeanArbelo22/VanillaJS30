// Obteniendo los elementos del DOM
const player = document.querySelector('.player'); // todo lo que contiene al reproductor
const video = document.querySelector('.viewer'); // archivo de video
const progress = document.querySelector('.progress'); // barra de progreso
const progressBar = document.querySelector('.progress__filled'); // progreso completado
const toggle = document.querySelector('.toggle'); // play button
const skipButtons = document.querySelectorAll('[data-skip]'); // skip buttons
const ranges = document.querySelectorAll('.player__slider'); // volumen y velocidad

// Funciones del reproductor
function togglePlay() {
    /* <video> posee la propiedad .paused (playing no existe), .currentTime y .duration, 
    y las funciones .play() y .pause() */
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}

function updateButton(/* e */) {
    // console.log(e); type play/pause
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
}

function skip() {
    // console.log(this.dataset.skip); // data-"skip" info
    video.currentTime += parseFloat(this.dataset.skip) /* += sirve para sumarle una cantidad al valor de una variable 
    parseFloat string a number */
}

function handleRangeChange() {
    // console.log(this.name); volume playbackRate son metodos de <video>
    // console.log(this.value);
    video[this.name] = this.value; // actualiza el valor de los metodos
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
   // console.log(e); // pointerEvent type click
   // console.log(e.offsetX); // click a (cantidad de pixeles) dentro de la barra (importante position: relative) 
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    //  (habria que crear un listener para keyup para que vuelva a grab)
}

// Conectar funciones a elementos con eventListener
// play pause
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
// cambiar boton
video.addEventListener('play', updateButton); // play por pause
video.addEventListener('pause', updateButton); // pause por play
// saltear y retroceder
skipButtons.forEach(button => button.addEventListener('click', skip));
// volumen y velocidad
ranges.forEach(range => range.addEventListener('change', handleRangeChange));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeChange));
// barra de progreso
video.addEventListener('timeupdate', handleProgress); // esto funciona cuando el video se reproduce o saltea

let mouseDown = false;
progress.addEventListener('click', scrub); // esto funciona cuando se selecciona un punto en la barra de progreso
// para poder arrastrar la barra de progreso
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e)) // si mouseDown es true => scrub, si no se detiene
progress.addEventListener('mousedown', () => {
    mouseDown = true;
    progress.style.cursor = 'grabbing';
})
progress.addEventListener('mouseup', () => {
    mouseDown = false;
    progress.style.cursor = 'grab';
})
