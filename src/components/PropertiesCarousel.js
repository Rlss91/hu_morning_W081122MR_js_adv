let propertiesArr;
let carouselDiv;
//this function will transfer data from homepage to this page
const initialPropertiesCarousel = (propertiesArrFromHomePage) => {
  propertiesArr = propertiesArrFromHomePage;
  carouselDiv = document.getElementById("home-page-properties-carousel");
  createCarousel();
};

const createItem = (name, img) => {
  return `
      <img src="${img}" alt="${name}" />
  `;
};

const createCarousel = () => {
  for (let property of propertiesArr) {
    carouselDiv.innerHTML += createItem(property.name, property.imgUrl);
  }
};

export default initialPropertiesCarousel;
