let name = "kenny";
let age = 80;
let race = "buldog";

let dogObj = {
  name: "rex",
  age: 20,
  race: "pudel",
};

let addressObj = {
  city: "petah rishol",
  st: "givat etzel barak",
  houseNumber: 141,
};

let ownerObj = {
  name: "kenny",
  age: 48.148,
};

let obj = {
  arr: [],
};

function displayFunc(dog, address, owner) {
  console.log(dog.name);
  dog.age++;
  console.log(dog.age);
  console.log(address.city);
}

displayFunc(dogObj, addressObj, ownerObj);
displayFunc(addressObj, dogObj, ownerObj); //error
