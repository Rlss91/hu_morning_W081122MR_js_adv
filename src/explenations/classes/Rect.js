class Rect {
  x; // x - point
  y; // y - point
  #w; // width - private
  #h; // height - private
  #perimeter; // - private
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.#w = w;
    this.#h = h;
    this.calcPerimeter();
  }
  calcPerimeter() {
    this.#perimeter = this.#w * 2 + this.#h * 2;
  }
  get w() {
    return this.#w;
  }
  set w(newW) {
    if (newW > 0) {
      this.#w = newW;
      this.calcPerimeter();
    }
  }
}

let rect = new Rect(0, 0, 5, 5);
/*
    let rect = {
        x:undefined,
        y:undefined,
        w:undefined,
        h:undefined
    }
*/
// rect.#w = 15;
console.log(rect.w); //get
rect.calcPerimeter();
rect.w = 15; //set
console.log("🚀 ~ file: rect.js:30 ~ rect", rect);

let rect2 = new Rect(0, 0, 10, 10);
let rect3 = new Rect(0, 0, 15, 15);
let rect4 = new Rect(0, 0, 20, 20);
