import {
  initialPropertiesGallery,
  updatePropertiesGallery,
} from "../components/PropertiesGallery.js";
import {
  initialPropertiesList,
  updatePropertiesList,
} from "../components/PropertiesList.js";
import {
  initialPropertiesCarousel,
  updatePropertiesCarousel,
} from "../components/PropertiesCarousel.js";

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
  let isAdmin = checkIfAdmin();
  //passing propertiesArr to PropertiesGallery.js
  initialPropertiesGallery(propertiesArr);
  initialPropertiesList(propertiesArr, isAdmin, deleteProperty);
  initialPropertiesCarousel(propertiesArr);
  initializeElements();
  initializeBtns();
});

const checkIfAdmin = () => {
  let token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  token = JSON.parse(token);
  return token.isAdmin;
};

const initializeElements = () => {
  /* btns */
  homeDisplayList = document.getElementById("homeDisplayList");
  homeDisplayGallery = document.getElementById("homeDisplayGallery");
  homeDisplayCousel = document.getElementById("homeDisplayCousel");
  /* divs */
  propertiesGallery = document.getElementById("propertiesGallery");
  propertiesList = document.getElementById("propertiesList");
  propertiesCarusel = document.getElementById("propertiesCarusel");
  displayNow = propertiesList; // choose who we want to display
  displayToDisplay(displayNow);
};

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
  document
    .getElementById("homeDisplaySortASC")
    .addEventListener("click", () => {
      sortPropertys();
    });
  document
    .getElementById("homeDisplaySortDESC")
    .addEventListener("click", () => {
      sortPropertys(false);
    });
  //need to fix bug on search again
  document
    .getElementById("homeDisplaySearch")
    .addEventListener("input", (ev) => {
      let regex = new RegExp("^" + ev.target.value, "ig");
      propertiesArr = JSON.parse(localStorage.getItem("props")).filter(
        (item) => {
          let reg = regex.test(item.name);
          console.log("item.name", item.name, " reg", reg);
          return reg;
        }
      );
      updateDisplayAndLocalStorage(false);
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

const updateDisplayAndLocalStorage = (save = true) => {
  if (save) {
    localStorage.setItem("props", JSON.stringify(propertiesArr)); // update local storage
  }
  updatePropertiesGallery(propertiesArr); // update gallery
  updatePropertiesList(propertiesArr); // update list
  updatePropertiesCarousel(propertiesArr); // update carousel
};

const deleteProperty = (index) => {
  index = +index; //convert string to number
  propertiesArr = propertiesArr.filter((item, idx) => idx !== index); //delete property by index
  updateDisplayAndLocalStorage();
};

const sortPropertys = (asc = true) => {
  if (asc) {
    // from a to z
    propertiesArr.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // from z to a
    propertiesArr.sort((a, b) => b.name.localeCompare(a.name));
  }
  updateDisplayAndLocalStorage(false);
};
