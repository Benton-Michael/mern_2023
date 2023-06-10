/*
pokémon data array
*/

const pokemon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);


/*
Using map() and filter() on the pokemon array, find the following:
1. an array of Pokemon objects with an id that is evenly divisible by 3
*/

const divByThree = pokemon.filter(pokemon => pokemon.id % 3 === 0);
console.log(divByThree);
/* output: 
[
  { id: 9, name: 'Blastoise', types: [ 'water' ] },
  { id: 12, name: 'Butterfree', types: [ 'bug', 'flying' ] },
  { id: 24, name: 'Arbok', types: [ 'poison' ] },
  { id: 63, name: 'Abra', types: [ 'psychic' ] },
  { id: 72, name: 'Tentacool', types: [ 'water', 'poison' ] },
  { id: 87, name: 'Dewgong', types: [ 'water', 'ice' ] },
  { id: 144, name: 'Articuno', types: [ 'ice', 'flying' ] }
]
*/

/*
2 an array of pokemon objects that are "fire" type
*/

const fireTypes = pokemon.filter(pokemon => pokemon.types.includes("fire"));
console.log(fireTypes);
/* output:
[
  { id: 5, name: 'Charmeleon', types: [ 'fire' ] },
  { id: 37, name: 'Vulpix', types: [ 'fire' ] },
  { id: 146, name: 'Moltres', types: [ 'fire', 'flying' ] }
]
*/

/*
3. an array of pokemon objects that have more than one type
*/

const multiTypes = pokemon.filter(pokemon => pokemon.types.length > 1);
console.log(multiTypes);
/* output:
[
  { id: 1, name: 'Bulbasaur', types: [ 'poison', 'grass' ] },
  { id: 12, name: 'Butterfree', types: [ 'bug', 'flying' ] },
  { id: 16, name: 'Pidgey', types: [ 'normal', 'flying' ] },
  { id: 72, name: 'Tentacool', types: [ 'water', 'poison' ] },
  { id: 74, name: 'Geodude', types: [ 'rock', 'ground' ] },
  { id: 87, name: 'Dewgong', types: [ 'water', 'ice' ] },
  { id: 144, name: 'Articuno', types: [ 'ice', 'flying' ] },
  { id: 145, name: 'Zapdos', types: [ 'electric', 'flying' ] },
  { id: 146, name: 'Moltres', types: [ 'fire', 'flying' ] }
]
*/

/*
4. an array with just the names of the pokemon
*/

const pokeNames = pokemon.map(pokemon => pokemon.name)
console.log(pokeNames);
/* output:
[
  'Bulbasaur',  'Charmeleon',
  'Blastoise',  'Butterfree',
  'Pidgey',     'Ekans',
  'Arbok',      'Pikachu',
  'Vulpix',     'Meowth',
  'Abra',       'Machamp',
  'Tentacool',  'Geodude',
  'Dewgong',    'Krabby',
  'Kangaskhan', 'Mr. Mime',
  'Eevee',      'Articuno',
  'Zapdos',     'Moltres',
  'Dragonair'
]
*/

/*
5. an array with just the names of the Pokemon with an id > 99
*/

const pokeBigID = pokemon
.filter(pokemon => pokemon.id > 99)
.map(pokemon => pokemon.name);
console.log(pokeBigID);
/* output:
[
  'Kangaskhan',
  'Mr. Mime',
  'Eevee',
  'Articuno',
  'Zapdos',
  'Moltres',
  'Dragonair'
]
*/

/*
6. an array with just the names of the pokemon whose only type is poison
*/
// const pokePoison = pokemon
// .filter(pokemon => pokemon.types.includes('poison'))
// .map(pokemon => pokemon.name);
// console.log(pokePoison);
const pokePoison = pokemon
.filter(pokemon => pokemon.types.length === 1 && pokemon.types[0] === "poison")
.map(pokemon => pokemon.name);
console.log(pokePoison);
/* output:
[ 'Ekans', 'Arbok' ]
*/

/*
7. an array containing just the first type of all the pokemon whose second type is flying
*/

const flyingPoke = pokemon
// check that poke has 2 types
// check that the type at index position 1 is "flying"
.filter(pokemon => pokemon.types.length === 2 && pokemon.types[1] === "flying")
.map(pokemon => pokemon.types[0]);
console.log(flyingPoke);
/* output:
[ 'bug', 'normal', 'ice', 'electric', 'fire' ]
*/

/*
8. a count of the number of pokemon that are "normal" type
*/

const normieCount = pokemon
.filter(pokemon => pokemon.types.includes("normal")).length;
console.log(normieCount);
/* output:
4
*/