let score = 0;
// document.getElementsByClassName("hole");
let holes = document.getElementsByClassName("hole");
setInterval(function () {
  let randomHole = Math.floor(Math.random() * holes.length);
  holes[randomHole].classList.toggle("mole");
}, 500);
