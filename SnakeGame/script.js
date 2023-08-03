const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector("score");
const highScoreElement = document.querySelector("high-score");
const controls = document.querySelector("controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5,
  snakeY = 5;
let velocityX = 0,
  velocityY = 0;
let snakeBody = [];
let setIntervalld;
let score = 0;
let highScore = localStorage.getItem("hish-score") || 0;
highScoreElement.innerText = `High score: ${highScore}`;

const updateFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};
