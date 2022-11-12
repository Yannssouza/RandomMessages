const random = {
    names: ["Carl", "Max", "Steve"],
    places: ["Street", "Field", "Stadium"],
    animal: ["Dog", "Bird", "Leo"]
}

function displayMessage() {
    const n = Math.floor(Math.random() * 3);
    const g = Math.floor(Math.random() * 3);
    const i = Math.floor(Math.random() * 3);
    return `${random.names[n]} was walking in the ${random.places[g]}, than he saw a ${random.animal[i]}.`;
}

console.log(displayMessage());
