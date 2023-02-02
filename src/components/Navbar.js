import checkIfAdmin from "../utils/checkIfAdmin.js";
import getNextId from "../utils/getNextId.js";

let nextId;
let isAdmin;
let showPopup;

let navAddNewPropertyLink;

const initializeNavbar = (showPopupFromHomePage) => {
  nextId = getNextId();
  isAdmin = checkIfAdmin();
  showPopup = showPopupFromHomePage;
  /* nav */
  navAddNewPropertyLink = document.getElementById("nav-add-new-property-link");
  if (!isAdmin) {
    navAddNewPropertyLink.classList.add("d-none");
  }
  navAddNewPropertyLink.addEventListener("click", () => {
    showPopup();
  });
};

export default initializeNavbar;
