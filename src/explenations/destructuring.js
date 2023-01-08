let obj = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};

// let name = obj.name;
// let id = obj.id;

let { name, id } = obj.origin;
let { name: planet } = obj.origin;
console.log("🚀 ~ file: destructuring.js:30 ~ planet", planet);
console.log("🚀 ~ file: destructuring.js:29 ~ id", id);
console.log("🚀 ~ file: destructuring.js:29 ~ name", name);

let arr = ["kenny", "john", "james"];
// let name2 = arr[0]
let [name0, name1] = arr;
let [, , name2] = arr;
