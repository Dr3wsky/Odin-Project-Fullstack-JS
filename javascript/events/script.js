function alertFunction() {
  alert("YAY! YOU DID IT!");
}

const btn2 = document.querySelector("#btn2");
btn2.onclick = alertFunction;

// const btn3 = document.querySelector('#btn3');
// btn3.addEventListener('click', alertFunction);

btn3.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
