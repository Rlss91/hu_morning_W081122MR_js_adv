let users = [
  { name: "kenny", age: 8 },
  { name: "john", age: 40 },
  { name: "james", age: 40 },
];

let newUsers = users.map((user) => ({ ...user, age: user.age * 2 }));

console.log(users);
console.log("🚀 ~ file: hw080123.js:9 ~ newUsers", newUsers);

console.log(Object.keys(users[0]));
