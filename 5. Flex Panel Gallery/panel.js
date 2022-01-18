const panels = document.querySelectorAll('.panel');
// con querySelector devuelve una nodeList de cada uno por separado
function toggleOpen(){ // ref a .open
    this.classList.toggle('open'); 
    /* classList.toggle: si la clase existe la elimina y devuelve false, si no, la añade y devuelve true */
};
panels.forEach(panel => {
    panel.addEventListener('click', toggleOpen); // abre los paneles
});
function toggleActive(e){ // ref a .open-active
    //console.log(e.propertyName); flex-grow font-size
    if(e.propertyName.includes('flex')){ // === 'flex' (o 'flex-grow' en algunos navegadores)
        this.classList.toggle('open-active'); // trae las <p> que estaban ocultas
    }
};
panels.forEach(panel => {
    panel.addEventListener('transitionend', toggleActive)
});