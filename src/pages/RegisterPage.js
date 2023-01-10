const inputName = document.getElementById("register-input-name");
const inputEmail = document.getElementById("register-input-email");
const inputPassword = document.getElementById("register-input-password");

inputName.addEventListener("change", () => {
  const reg = new RegExp("^[A-Z][a-z0-9-\\s]{2,255}$", "g");
  //   console.log(reg.test(inputName.value));
  if (reg.test(inputName.value)) {
    //the text is ok
    inputName.classList.remove("is-invalid");
    document.getElementById("register-alert-name").classList.add("d-none");
  } else {
    //the text is not ok
    inputName.classList.add("is-invalid");
    document.getElementById("register-alert-name").classList.remove("d-none");
  }
});

inputEmail.addEventListener("change", () => {
  const reg = new RegExp(
    "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",
    "ig"
  );
  if (reg.test(inputEmail.value)) {
    //the text is ok
    inputEmail.classList.remove("is-invalid");
    document.getElementById("register-alert-email").classList.add("d-none");
  } else {
    //the text is not ok
    inputEmail.classList.add("is-invalid");
    document.getElementById("register-alert-email").classList.remove("d-none");
  }
});

inputPassword.addEventListener("change", () => {
  const reg = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,255}$",
    "g"
  );
  if (reg.test(inputPassword.value)) {
    //the text is ok
    inputPassword.classList.remove("is-invalid");
    document.getElementById("register-alert-password").classList.add("d-none");
  } else {
    //the text is not ok
    inputPassword.classList.add("is-invalid");
    document
      .getElementById("register-alert-password")
      .classList.remove("d-none");
  }
});
