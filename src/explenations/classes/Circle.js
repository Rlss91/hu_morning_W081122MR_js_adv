class Circle {
  x;
  y;
  #r;
  #a;
  #p;
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.#r = r;
    this.calcA();
    this.calcP();
  }
  calcA() {
    this.#a = this.#r * this.#r * Math.PI;
  }
  calcP() {
    this.#p = 2 * this.#r * Math.PI;
  }
  get r() {
    return this.#r;
  }
  get a() {
    return this.#a;
  }
  get p() {
    return this.#p;
  }
  set r(newR) {
    if (newR > 0) {
      this.#r = newR;
      this.calcA();
      this.calcP();
    }
  }
}

let c = new Circle(0, 0, 5);
c.r = 10;
console.log(`r = ${c.r}, a = ${c.a}, p = ${c.p}`);
