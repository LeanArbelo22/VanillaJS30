console.log("\n %c Arrays con los que se va a trabajar 👇 \n ", "color: pink");
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kat', year: 2004 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
    { name: 'Lea', year: 1996 },
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  console.table(people);
  console.table(comments);

  // some(), every()
  console.log("\n %c 1. Al menos una persona tiene 19 años o mas? \n ", "color: green");
    const isAdult = people.some(function(person){
        const currentYear = (new Date()).getFullYear();
        if(currentYear - person.year >= 19){
            return true;
        }
    });
    console.log(`%c ${isAdult}`, "color: blue");
    // console.log({isAdult}); para mostrarlo como objeto y que muestre el nombre de la variable

  console.log("\n %c 2. Todos tienen 19 años o mas? \n ", "color: green");
    const allAdults = people.every(person => (new Date()).getFullYear() - person.year >= 19)
    console.log(`%c ${allAdults}`, "color: blue");

  // find()
  // similar a filter, pero en su lugar retorna solo el que estas buscando
  console.log("\n %c 3. Busca el comentario con el ID 823423 \n ", "color: green");
    const comment = comments.find(comment => {
        if(comment.id === 823423){
            return true
        }
    });
    //console.log(`El comentario con ID 82423 dice: ${comment.text}`);
    console.log({comment});

  // findIndex()
  // encuentra la posicion[i] de un elemento dentro del array 
  console.log("\n %c 4. Busca y elimina el comentario con el ID 123523 \n ", "color: green");
    const index = comments.findIndex(comment => comment.id === 123523);
    console.log(`%c index: ${index}`, "color: red");
    comments.splice(index, 1); // 1 es la cantidad de elementos a eliminar desde el i especificado
    console.table(comments);

    // otras funciones a practicar: flat(), flatMap() (para aplanar arrays que contienen arrays dentro)