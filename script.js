let randomNames = ["Carl", "Max", "Steve"];
let randomPlaces = ["Street", "Field", "Stadium"];
let randomAnimal = ["Dog", "Bird", "Leo"];

let n = Math.floor(Math.random() * 3);
let g = Math.floor(Math.random() * 3);
let i = Math.floor(Math.random() * 3);

console.log(`${randomNames[n]} was walking in the ${randomPlaces[g]}, than he saw a ${randomAnimal[i]}.`);
