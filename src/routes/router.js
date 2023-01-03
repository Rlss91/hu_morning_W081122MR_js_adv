import PAGES from "../models/pageModel.js";

/* Out pages */
const HOMEPAGELINK = document.getElementById(PAGES.HOME);
const ABOUTUSPAGELINK = document.getElementById(PAGES.ABOUT);
const CONTACTUSPAGELINK = document.getElementById(PAGES.CONTACT);
const LOGINTUSPAGELINK = document.getElementById(PAGES.LOGIN);
const REGISTERUSPAGELINK = document.getElementById(PAGES.REGISTER);

function handlePageChange(pageToDisplay) {
  /* hide all pages */
  HOMEPAGELINK.style.display = "none";
  ABOUTUSPAGELINK.style.display = "none";
  CONTACTUSPAGELINK.style.display = "none";
  LOGINTUSPAGELINK.style.display = "none";
  REGISTERUSPAGELINK.style.display = "none";

  switch (pageToDisplay) {
    case PAGES.HOME:
      HOMEPAGELINK.style.display = "block";
      break;
    case PAGES.ABOUT:
      ABOUTUSPAGELINK.style.display = "block";
      break;
    case PAGES.CONTACT:
      CONTACTUSPAGELINK.style.display = "block";
      break;
    case PAGES.LOGIN:
      LOGINTUSPAGELINK.style.display = "block";
      break;
    case PAGES.REGISTER:
      REGISTERUSPAGELINK.style.display = "block";
      break;
  }
}

export { handlePageChange };
