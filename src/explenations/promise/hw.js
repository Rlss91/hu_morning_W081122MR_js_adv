const findMaxIndexPromise = (arr) => {
  return new Promise((resolve, reject) => {
    if (!arr) {
      // findMaxIndexPromise()
      reject("the array undefined");
    }
    if (!Array.isArray(arr)) {
      // findMaxIndexPromise(5)
      reject("not arr");
    }
    if (!arr.length) {
      // findMaxIndexPromise([])
      reject("the array empty");
    }
    let maxInx = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        reject("need numbers arr");
        break;
      }
      if (arr[maxInx] < arr[i]) {
        maxInx = i;
      }
    }
    resolve(maxInx);
  });
};

const testOurPromise = async () => {
  try {
    let arrOfNumber = [1, 2, 3, 44, 5];
    //[-1, -2, -3]
    let maxInx = await findMaxIndexPromise(arrOfNumber);
    console.log("max index", maxInx);
  } catch (err) {
    console.log("Error", err);
  }
};
testOurPromise();
