const canvas = document.querySelector('#draw');
/* no se dibuja encima de canvas, es necesario un contexto (puede ser 2d o 3d) */
const ctx = canvas.getContext('2d');
/* re-sizing canvas (por default se establecio en 800px x 800px) */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
/* estilos */
ctx.strokeStyle = '#BADA55'; // color, degradado o patrón que se utilizará para los trazos alrededor de las formas
ctx.lineJoin = 'round'; // forma utilizada para unir dos segmentos de línea cuando se cruzan
ctx.lineCap = 'round'; // forma usada para dibujar los puntos finales de las líneas
/* comportamiento del mouse */
let isDrawing = false;
// para poder dibujar una linea se necesitan 2 lineas de inicio (lastx, lasty) y 2 de finalizacion (coordenadas)
let lastX = 0;
let lastY = 0;
// grosor del trazo
ctx.lineWidth = 30;
// hue
let hue = 50;
// comportamiento de trazo
let direction = true;

// blend modes
// ctx.globalCompositeOperation = 'copy'
//ctx.globalCompositeOperation = 'difference';
//ctx.globalCompositeOperation = 'multiply';
//ctx.globalCompositeOperation = 'xor';

function draw(e) {
    if(!isDrawing) return; // detiene la funcion si no se mantiene clickeado (mousedown)
    console.log(e); // muestra el mousemove

    // para que cambie el color
    ctx.strokeStyle = `hsl(${hue}, 75%, 60%)`

    ctx.beginPath(); /* ?? */
    // empieza en
    ctx.moveTo(lastX, lastY);
    // se mueve hacia
    ctx.lineTo(e.offsetX, e.offsetY); // e.offsetX/Y son propiedades del evento mousemove (posicion)
    ctx.stroke()
    // lastX/Y deben tomar el valor de la posicion final del mouse
    lastX = e.offsetX;
    lastY = e.offsetY;
    // incrementa el valor del color 
    hue++;
    if(hue >= 360){
        hue = 0
    }
    // incrementa el grosor
    if(ctx.lineWidth >= 200 || ctx.lineWidth <= 1){
        direction = !direction;
    };
    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
};

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    // ES6
    // se indica la posicion de inicio desde que se hace el click
    [lastX, lastY] = [e.offsetX, e.offsetY]

});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
// si el mouseup ocurre fuera del canvas isDrawing se mantiene en true, para evitarlo se usa mouseout
canvas.addEventListener('mouseout', () => isDrawing = false); 

