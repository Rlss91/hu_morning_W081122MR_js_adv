let arr = [12, 2, 2, 3, 23, 423];

let arr_length = arr.length;
for (let i = 0; i < arr_length; i++) {
  console.log(arr[i]);
}

for (let item of arr) {
  console.log(item);
}

let newArr = arr.map((item) => item * 2);

let newArr2 = arr.filter((item) => item > 3 && item < 100);
