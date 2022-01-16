const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    //console.log(this.dataset); atributos que comienzan con 'data-'
    
    const suffix = this.dataset.sizing || '';  // suffix = px
    /* el or '' es porque al recorrer los inputs, el de color 
    no tiene el atributo sizing y arrojaria undef */
    
    //console.log(this.name); spacing/blur/base
    //console.log(this.value); valor que toma cada input sin sufijo (px)
    
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    /* documentElement = root -- accede al root donde se encuentran las var css.
       setProperty establece un nuevo valor para una propiedad en un objeto de estilo CSS */ 
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
//inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));