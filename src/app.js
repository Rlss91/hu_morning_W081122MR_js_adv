import PAGES from "./models/pageModel.js";
import { handlePageChange } from "./routes/router.js";
import "./initialData/initialData.js";
import "./pages/RegisterPage.js";
import "./pages/LoginPage.js";
import "./pages/ProfilePage.js";
import { showNewPopup } from "./pages/HomePage.js";
import initializeNavbar from "./components/Navbar.js";
import checkIfConnected from "./utils/checkIfConnected.js";
// console.log("🚀 ~ file: app.js:3 ~ handlePageChange", handlePageChange);

// console.log(PAGES);

const navHomeLink = document.getElementById("nav-home-link");
const navAboutusLink = document.getElementById("nav-aboutus-link");
const navContactusLink = document.getElementById("nav-contactus-link");
const navRegisterPageLink = document.getElementById("nav-register-page");
const navLoginPageLink = document.getElementById("nav-login-page");
const navEditProfilePage = document.getElementById("nav-edit-profile-page");
const navLogout = document.getElementById("nav-logout");

window.addEventListener("load", () => {
  initializeNavbar(showNewPopup);
  if (checkIfConnected()) {
    let user = localStorage.getItem("token");
    user = JSON.parse(user);
    navEditProfilePage.innerText = user.name;
  }
});

navHomeLink.addEventListener("click", function () {
  handlePageChange(PAGES.HOME);
});
navAboutusLink.addEventListener("click", function () {
  handlePageChange(PAGES.ABOUT);
});
navContactusLink.addEventListener("click", function () {
  handlePageChange(PAGES.CONTACT);
});
navRegisterPageLink.addEventListener("click", function () {
  handlePageChange(PAGES.REGISTER);
});
navLoginPageLink.addEventListener("click", function () {
  handlePageChange(PAGES.LOGIN);
});
navEditProfilePage.addEventListener("click", () => {
  handlePageChange(PAGES.PROFILE);
});
navLogout.addEventListener("click", () => {
  localStorage.removeItem("token");
  location.reload();
});
