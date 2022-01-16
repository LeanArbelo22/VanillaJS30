const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

  // Array.prototype.filter()
    console.info("\n %c 1. Filtra la lista de inventores con aquellos que nacieron entre el 1500 y antes del 1600 \n ", "color: green");

        const fifteen = inventors.filter(inventor => { 
            if(inventor.year >= 1500 && inventor.year < 1600 /* <= 1599*/ ){ 
                return true; // toma los que cumplan la condicion
            } 
        });
        console.table(fifteen)

        /* filter crea un nuevo array que cumpla las condiciones especificadas,
        recibe una funcion como parametro que itera todos los objetos del array */

    // Array.prototype.map()
    console.log("\n %c 2. Crea un array con los nombres y apellidos de cada inventor \n ", "color: green");

        const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
        console.table(fullNames);

        /* map crea un nuevo array con la misma longitud del original, pero realizando algo */

    // Array.prototype.sort()
    console.log("\n %c 3. Ordena los inventores por su nacimiento, los mas antiguos primero \n ", "color: green");

    const ordered = inventors.sort(function(first, second){
        if(first.year > second.year){
            return 1
        } else{
            return -1
        }
    });
    console.table(ordered);

    /* sort ordena los elementos de un array tomando dos elementos de referencia (a y b || first y second)
    y retorna 1 (bottom) o -1 (top) segun la condicion dada */

    // Array.prototype.reduce()
    console.log("\n %c 4. Cuantos años vivieron todos los inventores juntos? \n ", "color: green");
        
    const totalYears = inventors.reduce((total, inventor) => {
            return total + (inventor.passed - inventor.year)
        }, 0);
    console.log(totalYears);

        /* total se va acumulando cada vez que se itera un elemento, el valor inicial de total es 0
        especificado luego de la funcion */

    // sort()
    console.log("\n %c 5. Ordena los inventores por años vividos \n ", "color: green");

    const oldest = inventors.sort((a, b) => {
        const last = a.passed - a.year;
        const next = b.passed - b.year;
        return last > next ? -1 : 1;
    });
    console.table(oldest);

    // map(), filter(), includes()
    console.log("\n %c 6. Crea una lista de los boulevares de Paris que contengan 'de' en cualquier parte de su nombre", "color:green");
    console.log("%ctrabajar en consola desde https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris y utilizar las siguientes lineas de codigo:", "color: blue");
    console.log(
    `
    const category = document.querySelector('.mw-category');
    const links = Array.from(category.querySelectorAll('a')); // para covertirlo en array
    const deText = links
                    .map(link => link.textContent)
                    .filter(streetName => streetName.includes('de'));
    console.table(deText);`);

    // sort()
    console.log("\n %c 7. Ordena el array de personas alfabeticamente por su apellido \n ", "color: green");

    const alpha = people.sort((lastOne, nextOne) => {
        const [aFirst, aLast] = lastOne.split(', '); // split crea un array por cada elemento que divide
        const [bFirst, bLast] = nextOne.split(', ');
        
        //console.log(aFirst, aLast); 'nombre apellido'

        return aLast > bLast ? 1 : -1;
    });
    console.table(alpha)

    // reduc()
    console.log("\n %c 8. Resuma las instancias de cada uno de estos: ", "color: green");

    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    
    console.log(`%c ${data} \n `, "color: purple");

    const transport = data.reduce(function(obj, item){
        if(!obj[item]){
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {/* comineza con un obj vacio */} );

    console.table(transport);