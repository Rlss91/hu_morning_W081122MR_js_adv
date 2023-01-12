import validateEmail from "../validation/validateEmail.js";

const loginEmailInput = document.querySelector("#login-input-email");
const loginPasswordInput = document.querySelector("#login-input-password");

loginEmailInput.addEventListener("input", () => {
  let errorArr = validateEmail(loginEmailInput.value);
  if (errorArr.length === 0) {
    //no error
    loginEmailInput.classList.remove("is-invalid");
    document.getElementById("login-alert-email").classList.add("d-none");
  } else {
    // error/s
    loginEmailInput.classList.add("is-invalid");
    document.getElementById("login-alert-email").classList.remove("d-none");
    document.getElementById("login-alert-email").innerHTML =
      errorArr.join("<br>");
    /*
        let str = errorArr.join("<br>")
        document.getElementById("login-alert-email").innerHTML = str
      */
  }
});
