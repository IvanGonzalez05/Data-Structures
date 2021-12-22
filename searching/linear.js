// Linear search is a method to find a target value in a list.
// It sequentially check each element of the list for the target value
// until match the target or till reaching the end of the list. It has big O of O(n)

const beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];

// All of these methods (and more) perform linear search, which are O(n)

console.log(`index of Godzilla: ${beasts.indexOf("Godzilla")}`);

const findIndex = beasts.findIndex((item) => item === "Godzilla");
console.log(`find index ${findIndex}`);

const found = beasts.find((item) => item === "Godzilla");
console.log(`found ${found}`);

console.log(`includes ${beasts.includes("Godzilla")}`);
