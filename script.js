// Array of words to choose from
const words = ["apple", "banana", "cherry", "orange", "grape", "kiwi", "lemon", "melon", "peach", "pear", "pineapple", "strawberry"];

let startTime;
let endTime;
let score = 0;
let timeLeft = 60;

// Select the HTML elements
const wordElement = document.querySelector(".word");
const inputElement = document.querySelector(".input");
const scoreElement = document.querySelector(".score span");
const timerElement = document.querySelector(".timer span");
const startButton = document.querySelector(".start");

// Function to choose a random word from the array
function chooseWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  wordElement.textContent = randomWord;
}

// Function to start the game
function startGame() {
  chooseWord();
  score = 0;
  timeLeft = 60;
  scoreElement.textContent = score;
  timerElement.textContent = timeLeft;
  inputElement.value = "";
  inputElement.disabled = false;
  inputElement.focus();
  startButton.disabled = true;
  startTime = new Date();
  const timer = setInterval(function() {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      endTime = new Date();
      
// Calculate the total time and display the result
const totalTime = (endTime - startTime) / 1000;
alert(`Game over! Your score is ${score} and your total time is ${totalTime} seconds.`);
inputElement.disabled = true;
startButton.disabled = false;
}
}, 1000);
}

// Event listener for the start button
startButton.addEventListener("click", startGame);

// Event listener for the input element
inputElement.addEventListener("input", function() {
if (inputElement.value === wordElement.textContent) {
chooseWord();
score++;
scoreElement.textContent = score;
inputElement.value = "";
}
});

