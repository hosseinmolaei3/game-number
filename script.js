const message = document.querySelector(".messge");
const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const source = document.createElement("p");
message.appendChild(source);
let gamePlay = false;
let score = 0;
button.addEventListener("click", function () {
  message.innerHTML = "game is start . . . . ";
  if (!gamePlay) {
    gameArea.innerHTML = "";
    gamePlay = true;
    maker();
    button.innerHTML = "change combo";
  } else {
    score++;
    message.innerText = "guess score: " + score;
    const numbers = document.querySelectorAll(".numb");
    console.log(numbers);
    let win = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].correct) {
        numbers[i].style.backgroundColor = "green";
        win++;
      } else {
        numbers[i].style.backgroundColor =
          numbers[i].value < numbers[i].correct ? "red" : "blue";
      }
      if (win == numbers.length) {
        gamepuasd();
      }
    }
  }
});
function gamepuasd() {
  button.innerHTML = "restart game";
  gamePlay = false;
  message.innerHTML = "you solved the score:  " + score + " gusses  </br>";
  score = 0;
}
function maker() {
  for (let x = 0; x < 6; x++) {
    let element = document.createElement("input");
    element.setAttribute("type", "number");
    gameArea.appendChild(element);
    element.size = 9;
    element.min = 0;
    element.max = 9;
    element.classList.add("numb");
    element.style.fontWeight = "900";
    element.style.width = "50px";
    element.correct = Math.floor(Math.random() * 10);
    element.value = 0;
    element.order = x;
  }
}