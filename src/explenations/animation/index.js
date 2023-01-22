document.getElementById("start-animation-btn").addEventListener("click", () => {
  document
    .querySelector(".img-container > img:nth-child(1)")
    .classList.add("fade-out");
  document
    .querySelector(".img-container > img:nth-child(2)")
    .classList.add("fade-in");
  document
    .querySelector(".img-container > img:nth-child(2)")
    .addEventListener("animationend", () => {
      console.log("animation done");
    });
});
