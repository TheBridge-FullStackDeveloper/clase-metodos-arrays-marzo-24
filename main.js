// function sum(a, b) {
//   return a + b;
// }
const x = (e) => e;

// const sum = (a, b) => {
//   //parametros
//   // sum()// recursividad-> función que se llama asi misma
//   return a + b;
// };
// // const sum = (a,b) => a+b
// console.log(sum(1, 2)); //argumentos

const y = (testFunction) => {
  testFunction();
};

// y(x(1,2))
// btn.addEventListener("click", ()=> {

// })

const fruits = ["manzana", "piña", "platano", "pera", "fresas", "jamón"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (const fruit of fruits) {
//     console.log(fruit);
// }

// fruits.forEach((fruit,i,array) => {
//   console.log(array);
// });
// fruits.forEach(function (pepito) {
//     console.log(pepito);
//   });

// const canciones = ["Hang onto yourself", "Go your own way", "Modern Love"];

// canciones.forEach((cancion, indice, array) => {
//   console.log('Elemento actual',cancion,'índice', indice,'array',array);
// });
const myArray = [1, 2, 3, 4];

// const myArrayTimesTwo = myArray.map((value)=>{
//     return value * 2
// })

// const myArrayTimesTwo = []

// for (let index = 0; index < myArray.length; index++) {
//     myArrayTimesTwo.push(myArray[index]*2)
// }
// console.log(myArrayTimesTwo);

const myArrayTimesTwo = myArray.map((number) => number * 2);
const songs = [
  { name: "Curl of the Burl", artist: "Mastodon" },
  { name: "Oblivion", artist: "Mastodon" },
  { name: "Flying Whales", artist: "Gojira" },
  { name: "Euralio y sus cabras", artist: "Euralio" },
];

//   const allSongNames = []

//   for (const song of songs) {
//       allSongNames.push(song.name)
//   }
//   const allSongNames = songs.map(song =>{
//     return song.name
//   })
//   const allSongNames = songs.map(song => song.name)
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosFiltrados = numeros.filter(numero => numero > 5)

// let numerosFiltrados = [];

// for (let index = 0; index < numeros.length; index++) {
//   if (numeros[index] > 5) {
//     numerosFiltrados.push(numeros[index]);
//   }
// }
console.log(numerosFiltrados);
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];


// let result =[]
// for (const word of words) {
//     if(word.length > 6){
//         result.push(word)
//     }
// }

const result = words.filter( word => word.length>6)
console.log(result);

const numbers = [10, 5, 7];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    // sum = sum + numbers[i];
    sum += numbers[i];
}

// const sumNumbers = numbers.reduce((valorAnterior,valorActual)=>{
//     return valorAnterior + valorActual
// })
const sumNumbers = numbers.reduce((valorAnterior,valorActual)=>valorAnterior + valorActual,10)
console.log(sumNumbers);

