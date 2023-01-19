import Property from "../models/Property.js";

const createData = () => {
  let propertiesArr = [
    new Property(
      "Kenny's house",
      8.12,
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
      "./assets/imgs/1.jpg"
    ),
    new Property(
      "Chocolate house",
      20,
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
      "./assets/imgs/2.jpg"
    ),
    new Property(
      "Kenny's beach house",
      25,
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
      "./assets/imgs/3.jpg"
    ),
    new Property(
      "John's raft",
      9.9,
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
      "./assets/imgs/4.jpg"
    ),
    new Property(
      "John's pie",
      3.14,
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
      "./assets/imgs/5.jpg"
    ),
    new Property(
      "Kart's dream house",
      2.5,
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
      "./assets/imgs/6.jpg"
    ),
  ];
  return propertiesArr;
};

const setInitialData = () => {
  let properties = localStorage.getItem("props");
  if (properties) {
    return;
  }
  localStorage.setItem("props", JSON.stringify(createData()));
};

window.addEventListener("load", () => {
  setInitialData();
});
