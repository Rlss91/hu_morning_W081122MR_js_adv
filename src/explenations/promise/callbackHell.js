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

const promiseHell = () => {
  createPromise(1, 10)
    .then((users1) => {
      console.log(users1);
      createPromise(11, 20)
        .then((users2) => {
          console.log(users2);
          createPromise(21, 30)
            .then((users3) => {
              console.log(users3);
              createPromise(31, 40)
                .then((users4) => {
                  console.log(users4);
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

const promiseHeaven = async () => {
  try {
    let users1 = await createPromise(1, 10);
    console.log(users1);
    let users2 = await createPromise(11, 20);
    console.log(users2);
    let users3 = await createPromise(21, 30);
    console.log(users3);
    let users4 = await createPromise(31, 40);
    console.log(users4);
  } catch (err) {
    console.log(err);
  }
};
promiseHeaven();
