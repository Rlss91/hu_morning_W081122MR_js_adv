import Property from "../models/Property.js";
import initialPropertiesGallery from "../components/PropertiesGallery.js";
import initialPropertiesList from "../components/PropertiesList.js";
import initialPropertiesCarousel from "../components/PropertiesCarousel.js";

let propertiesArr;

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
});
