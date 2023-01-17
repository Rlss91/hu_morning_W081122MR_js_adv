// define new promise
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Date.now() % 2 === 0) {
      resolve([
        { name: "kenny", age: 8 },
        { name: "john", age: 40 },
      ]);
    } else {
      reject("You shall not pass");
    }
  }, 3000);
});

myPromise
  .then((users) => {
    console.log(users);
  })
  .catch((err) => {
    console.log(err);
  });

let myPromiseTK = new Promise((ok, not) => {
  setTimeout(() => {
    // console.log("😎😎😎🦄🦄🦄");
    ok("😎😎😎🦄🦄🦄");
  }, 3000);
});

myPromiseTK.then((smile) => {
  console.log("smile", smile);
});
