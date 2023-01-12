class Shape {
  x;
  y;
  w;
  h;
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  calcP() {}
  calcS() {}
}

class Rect extends Shape {
  constructor(x, y, w, h) {
    super(x, y, w, h);
  }
}

class Ribua extends Rect {
  constructor(x, y, wh) {
    super(x, y, wh, wh);
  }
}

// let rect = new Rect(0, 0, 5, 5);
// console.log("🚀 ~ file: extends.js:23 ~ rect", rect);

class Circle extends Shape {
  r;
  constructor(x, y, r) {
    super(x, y, r * 2, r * 2);
    this.r = r;
  }
}

class Animal {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Dolphin extends Animal {
  smart;
  constructor(name, age, smart) {
    super(name, age);
    this.smart = smart;
  }
}

let d1 = new Dolphin("kenny", 8, 5);
let d2 = new Dolphin("johnny", 40, 4);
let obj = {};
let a1 = new Animal("kartman", 8);

// console.log("d1", d1);
// console.log("d2", d2);
// console.log(obj instanceof Animal);
// console.log(a1 instanceof Animal);
// console.log(d1 instanceof Animal);
// console.log(d1 instanceof Dolphin);
// console.log(a1 instanceof Dolphin);

const printAnimal = (animal) => {
  if (!animal) {
    return;
  }
  if (animal instanceof Animal) {
    console.log(animal.name + " " + animal.age);
  } else {
    console.log("not animal");
  }
};
printAnimal();
printAnimal(a1);
printAnimal(d1);
printAnimal({});
