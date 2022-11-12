const random = {
    names:  ["Carl", "Max", "Steve"],
    places: ["Street", "Field", "Stadium"],
    animal: ["Dog", "Bird", "Leo"]
}

const n = Math.floor(Math.random() * 3);
let g = Math.floor(Math.random() * 3);
let i = Math.floor(Math.random() * 3);

console.log(`${random.names[n]} was walking in the ${random.places[g]}, than he saw a ${random.animal[i]}.`);
