class Point {
  static countPoints(arr) {
    let counter = 0;
    for (let item of arr) {
      if (item instanceof Point) {
        counter++;
      }
    }
    return counter;
  }
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// let p1 = new Point(0,0)
// let p2 = new Point(0,0)
// let p3 = new Point(0,0)

let someArr = [new Point(0, 0), new Point(1, 1), new Point(2, 2), {}, 5, []];
let points = Point.countPoints(someArr);
console.log("🚀 ~ file: static.js:25 ~ points", points);
