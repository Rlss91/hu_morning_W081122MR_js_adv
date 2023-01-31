const editPropertiesPopupImgDisplay = document.getElementById(
  "editPropertiesPopupImgDisplay"
);
const editPropertiesPopupName = document.getElementById(
  "editPropertiesPopupName"
);
const editPropertiesPopupDescription = document.getElementById(
  "editPropertiesPopupDescription"
);
const editPropertiesPopupPrice = document.getElementById(
  "editPropertiesPopupPrice"
);
const editPropertiesPopupImg = document.getElementById(
  "editPropertiesPopupImg"
);
const editPropertiesPopup = document.getElementById("editPropertiesPopup");
let selectedProperty;
const initPopup = (selectedPropertyFromHomePage) => {
  /*
    set data from selectedProperty to html
    */
  selectedProperty = selectedPropertyFromHomePage;
  editPropertiesPopupImgDisplay.src = selectedProperty.imgUrl;
  editPropertiesPopupName.value = selectedProperty.name;
  editPropertiesPopupDescription.value = selectedProperty.description;
  editPropertiesPopupPrice.value = selectedProperty.price;
  editPropertiesPopupImg.value = selectedProperty.imgUrl;
  showPopup();
};

const showPopup = () => {
  editPropertiesPopup.classList.remove("d-none");
};

export { initPopup, showPopup };
