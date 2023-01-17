function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const createPromise = (min, max) => {
  return new Promise((ok, not) => {
    let ran = getRandomIntInclusive(min, max);
    if (ran % 3) {
      // ran % 3 !== 0
      ok(ran);
    } else {
      not("this number / 3");
    }
  });
};
createPromise(0, 10)
  .then((num) => {
    console.log(num);
  })
  .catch((err) => console.log(err));
