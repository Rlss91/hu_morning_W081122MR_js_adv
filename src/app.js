import PAGES from "./models/pageModel.js";
import { handlePageChange } from "./routes/router.js";
// console.log("🚀 ~ file: app.js:3 ~ handlePageChange", handlePageChange);

// console.log(PAGES);

const navHomeLink = document.getElementById("nav-home-link");
const navAboutusLink = document.getElementById("nav-aboutus-link");

navHomeLink.addEventListener("click", function () {
  handlePageChange(PAGES.HOME);
});
navAboutusLink.addEventListener("click", function () {
  handlePageChange(PAGES.ABOUT);
});
