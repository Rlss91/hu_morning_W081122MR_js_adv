class Circle {
  x;
  y;
  r;
  a;
  p;
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.calcA();
    this.calcP();
  }
  calcA() {
    this.a = this.r * this.r * Math.PI;
  }
  calcP() {
    this.p = 2 * this.r * Math.PI;
  }
}
