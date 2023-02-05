const toast = document.getElementById("toast");
let id = 1;
const showToast = (msg, success = true) => {
  let thisId = id++;
  toast.innerHTML += `<div id="toastMsg-${thisId}" class="${
    success ? "success" : "error"
  }">${msg}
  <div class="toast-timer"></div>
  </div>`;
  setTimeout(() => {
    document.getElementById(`toastMsg-${thisId}`).remove();
  }, 3000);
};

export default showToast;
