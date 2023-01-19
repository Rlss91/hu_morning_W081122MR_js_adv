import Property from "../models/Property.js";
import initialPropertiesGallery from "../components/PropertiesGallery.js";

let propertiesArr;

window.addEventListener("load", () => {
  propertiesArr = localStorage.getItem("props");
  if (!propertiesArr) {
    return;
  }
  propertiesArr = JSON.parse(propertiesArr);
  initialPropertiesGallery(propertiesArr);
});
