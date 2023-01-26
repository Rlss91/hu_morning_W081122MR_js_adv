let propertiesArr;
let carouselDiv;
let showIdx = 0; //index(array) of the image that we display now
let animationStarted = 0;
//this function will transfer data from homepage to this page
const initialPropertiesCarousel = (propertiesArrFromHomePage) => {
  propertiesArr = propertiesArrFromHomePage;
  carouselDiv = document.getElementById("home-page-properties-carousel");
  createCarousel();
  document
    .getElementById("back-carusel-btn")
    .addEventListener("click", () => {});
  document.getElementById("next-carusel-btn").addEventListener("click", () => {
    if (animationStarted !== 0) {
      return;
    }
    animationStarted = 2;
    let nextIdx = showIdx + 1;
    //showIdx = index of image to hide
    //nextIdx = index of image to display
    if (nextIdx >= propertiesArr.length) {
      nextIdx = 0;
    }
    let imgToHide = document.querySelector(
      `.img-container > img:nth-child(${showIdx + 1})`
    );
    imgToHide.classList.add("fade-out");
    const hideImgAnim = () => {
      imgToHide.removeEventListener("animationend", hideImgAnim); //remove event after executed
      imgToHide.classList.add("opacity-0");
      imgToHide.classList.remove("fade-out");
      console.log("opacity-0 added, showIdx", showIdx);
      animationStarted--;
    };
    imgToHide.addEventListener("animationend", hideImgAnim);
    let imgToShow = document.querySelector(
      `.img-container > img:nth-child(${nextIdx + 1})`
    );
    imgToShow.classList.remove("opacity-0");
    imgToShow.classList.add("fade-in");
    imgToShow.addEventListener(
      "animationend",
      () => {
        // imgToShow.classList.remove("opacity-0");
        imgToShow.classList.remove("fade-in");
        animationStarted--;
      },
      { once: true }
    );
    // showIdx++;
    // if (showIdx >= propertiesArr.length) {
    //   showIdx = 0;
    // }
    showIdx = nextIdx;
  });
};

const createItem = (name, img) => {
  //opacity-0 hide image
  return `
      <img src="${img}" alt="${name}" class="opacity-0" />
  `;
};

const createCarousel = () => {
  for (let property of propertiesArr) {
    carouselDiv.innerHTML += createItem(property.name, property.imgUrl);
  }
  //show the first img
  document
    .querySelector(".img-container > img:nth-child(1)")
    .classList.remove("opacity-0");
};

export default initialPropertiesCarousel;
