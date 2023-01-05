let arr = [1, 2, 3];

arr.push(4);

arr = [...arr, 4]; //push
arr = [0, ...arr]; //unshift
//...arr => [1,2,3,4]

let arr2 = [5, 6, 7];

let arr12 = [-1, ...arr, 4.5, ...arr2, 8];
