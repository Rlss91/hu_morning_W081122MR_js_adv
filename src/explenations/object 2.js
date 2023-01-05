let user = {
  name: "kenny",
  age: 8,
  address: {
    city: "south park",
    st: "born to die",
    house: 69,
  },
};
let user2 = {
  name: "john",
  age: 40,
};

let userArr = [user, user2]; // array of objects

user.work = "macdonaldsss"; // add new property

let user3 = user;

user3.age++; //effect user and user3

let user4 = { ...user };
user4.address = { ...user.address }; //deep copy

user4.age++; //effect only user4 and not user
