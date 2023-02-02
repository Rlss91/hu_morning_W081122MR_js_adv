let selectedProperty, editProperty;
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

const initPopup = (selectedPropertyFromHomePage, editPropertyFromHomePage) => {
  /*
    set data from selectedProperty to html
    */
  selectedProperty = selectedPropertyFromHomePage;
  editProperty = editPropertyFromHomePage;
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

const hidePopup = () => {
  editPropertiesPopup.classList.add("d-none");
};

window.addEventListener("load", () => {
  editPropertiesPopup.addEventListener("click", (ev) => {
    if (
      ev.target.id !== "editPropertiesPopup" &&
      ev.target.id !== "editPropertiesPopupCancelBtn" &&
      ev.target.id !== "editPropertiesPopupCancelBtnIcon"
    ) {
      return;
    }
    hidePopup();
  });
  document
    .getElementById("editPropertiesPopupSaveBtn")
    .addEventListener("click", () => {
      selectedProperty.name = editPropertiesPopupName.value;
      selectedProperty.description = editPropertiesPopupDescription.value;
      selectedProperty.price = editPropertiesPopupPrice.value;
      selectedProperty.imgUrl = editPropertiesPopupImg.value;
      editProperty();
      hidePopup();
    });
  editPropertiesPopupImg.addEventListener("input", () => {
    editPropertiesPopupImgDisplay.src = editPropertiesPopupImg.value;
  });
});

export { initPopup, showPopup, hidePopup };
