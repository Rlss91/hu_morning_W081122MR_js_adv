let timer = 0;
let timerID = setInterval(() => {
  document.getElementById("timeDiv").innerHTML = timer + "";
  timer++;
}, 1000);
console.log("msg");
setTimeout(() => {
  clearInterval(timerID);
}, 3000);
