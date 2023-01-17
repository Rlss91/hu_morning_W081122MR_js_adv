function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const createPromise = (min, max) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getRandomIntInclusive(min, max) % 2 === 0) {
        resolve([
          { name: "kenny", age: 8 },
          { name: "john", age: 40 },
        ]);
      } else {
        reject("You shall not pass");
      }
    }, 3000);
  });
};

let p1 = createPromise(1, 10);
let p2 = createPromise(11, 20);

p1.then((users) => {
  console.log(users);
}).catch((err) => {
  console.log(err);
});
createPromise(1, 10)
  .then((users) => {
    console.log(users);
  })
  .catch((err) => {
    console.log(err);
  });
