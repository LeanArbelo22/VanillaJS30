const dogs = [{ name: 'Snickers', age: 2, color: 'yellow' }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

    // Regular
    console.log('regular console.log')
    // Interpolated
    console.log('esto es un %s interpolado ', 'console.log');
    // Styled
    console.log('texto con %c estilos', 'font-size: 20px; color: red; text-shadow: 2px 2px 0 blue')
    // warning!
    console.warn('Advertencia')
    // Error
    console.error('Error')
    // Info // no funciona en chrome
    console.info('Info')
    // Testing
    const p = document.querySelector('p');

    console.assert(p.classList.contains('exists'), 'FALSE'); // muestra el error solo si es false
    // clearing
    console.clear() // borra todo de la consola

    // Viewing DOM Elements
    console.log(p); // <p onClick="makeGreen()">×BREAK×DOWN×</p>
    console.dir(p); // muestra todos los atributos y metodos del elemento
    console.clear();

    // Grouping together
    dogs.forEach(dog => {
        console.group(`${dog.name}`); //goupCollapsed
        console.log(`Mi nombre es ${dog.name}`);
        console.log(`y tengo ${dog.age} años`);
        console.groupEnd(`${dog.name}`);
        
    });
    // counting
    console.count('Lean');
    console.count('Miguel');
    console.count('Miguel');
    console.count('Lean');
    console.count('Lean');
    console.count('Miguel');
    console.count('Miguel');
    console.count('Miguel');
    console.count('Miguel');
    console.count('Lean');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json)
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        });

    // table

    console.table(dogs)