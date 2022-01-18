const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const promise = fetch(endpoint)
                .then(blob => blob.json()) // blob representa datos que no necesariamente se encuentran en formato nativo de JS.
                .then(data => cities.push(...data)); // data = array de objetos (cities)

function findMatches(wordToMatch, cities){
    return cities.filter(place => { // place = city, state, population, etc
        // descubrir si la palabra que se busca coincide con los elementos del array
        const regex = new RegExp(wordToMatch, 'gi'); // g = global (busca todo) i = insensitive (mayuscula o minuscula)
        return place.city.match(regex) || place.state.match(regex); 
    }); 
};

/* funcion copiada (no la entiendo) */
function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(){
    // console.log(this.value); input.value
    const matchArray = findMatches(this.value, cities);
    // console.log(matchArray) muestra las coincidencias entre lo que se busca y el array
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityNameHL = place.city.replace(regex, `<span class="hl">${this.value}</span>`); // resaltar lo que se busca en las coincidencias
        const stateNameHL = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span class="name">${cityNameHL}, ${stateNameHL}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        ` /* ${place.city} es igual a ${cityNameHL} pero sin resaltar las palabras  */
    }).join(''); // map devuelve un array, se usa join para convertirlo en string
    suggestions.innerHTML = html;
};

const searchInput = document.querySelector('.search'); // input
// searchInput.addEventListener('change', displayMatches); // cuando se hace click fuera del input
searchInput.addEventListener('keyup', displayMatches); // cuando se levanta la tecla
const suggestions = document.querySelector('.suggestions'); // ul



