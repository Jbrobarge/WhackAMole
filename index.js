let score = 0;
let scoreDisplay = document.getElementById("score");
// document.getElementsByClassName("hole");
let holes = document.getElementsByClassName("hole");
setInterval(function () {
  let randomHole = Math.floor(Math.random() * holes.length);
  holes[randomHole].classList.toggle("mole");
}, 1000);

const gameArea = document.getElementById("whack-a-mole");
gameArea.addEventListener("click", function (clickEvent) {
  if (clickEvent.target.matches(".mole")) {
    clickEvent.target.classList.remove("mole");
    score++;
    scoreDisplay.innerText = score;
  }
});
