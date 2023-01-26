import Property from "../models/Property.js";
import initialPropertiesGallery from "../components/PropertiesGallery.js";
import initialPropertiesList from "../components/PropertiesList.js";
import initialPropertiesCarousel from "../components/PropertiesCarousel.js";

let propertiesArr;
let displayNow; // display that we can see now

/* btns */
let homeDisplayList;
let homeDisplayGallery;
let homeDisplayCousel;
/* displays */
let propertiesGallery;
let propertiesList;
let propertiesCarusel;

window.addEventListener("load", () => {
  propertiesArr = localStorage.getItem("props");
  if (!propertiesArr) {
    return;
  }
  propertiesArr = JSON.parse(propertiesArr);
  //passing propertiesArr to PropertiesGallery.js
  initialPropertiesGallery(propertiesArr);
  initialPropertiesList(propertiesArr);
  initialPropertiesCarousel(propertiesArr);
  /* btns */
  homeDisplayList = document.getElementById("homeDisplayList");
  homeDisplayGallery = document.getElementById("homeDisplayGallery");
  homeDisplayCousel = document.getElementById("homeDisplayCousel");
  /* divs */
  propertiesGallery = document.getElementById("propertiesGallery");
  propertiesList = document.getElementById("propertiesList");
  propertiesCarusel = document.getElementById("propertiesCarusel");
  displayNow = propertiesGallery; // choose who we want to display
  displayToDisplay(displayNow);
  initializeBtns();
});

const initializeBtns = () => {
  homeDisplayList.addEventListener("click", () => {
    displayToDisplay(propertiesList);
  });
  homeDisplayGallery.addEventListener("click", () => {
    displayToDisplay(propertiesGallery);
  });
  homeDisplayCousel.addEventListener("click", () => {
    displayToDisplay(propertiesCarusel);
  });
};

const displayToDisplay = (toDisplay) => {
  // hide what we currently showing
  displayNow.classList.remove("d-block");
  displayNow.classList.add("d-none");
  // show what we want to display now
  toDisplay.classList.remove("d-none");
  toDisplay.classList.add("d-block");
  //this is what we displaying now
  displayNow = toDisplay;
};
