const pressed = []; // donde se agregaran las teclas presionadas
const secretCode = 'leandro';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key); // agrega las teclas presionadas
    pressed.splice(-secretCode.lenght - 1 /*indica que debe contar de fin a inicio*/, pressed.length - secretCode.length);
    // ☝ devuelve un array con las ultimas 4 teclas presionadas (4 = secretCode.length)
    // 👇 convierto el array a string con join y detectamos la sequencia
    if(pressed.join('').includes(secretCode)){
        console.log('TRUCO DETECTADO');
        cornify_add();
    } else if (pressed.join('').includes('cesar')){
        const p = document.querySelector('.if-cesar');
        p.innerHTML = "..."
    }
    console.log(pressed);
})