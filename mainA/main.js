function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() == "rock" &&
      computerSelection[computerPlay] == "scissors") ||
    (playerSelection.toLowerCase() == "paper" &&
      computerSelection[computerPlay] == "rock") ||
    (playerSelection.toLowerCase() == "scissors" &&
      computerSelection[computerPlay] == "paper")
  ) {
    playerScore++;
    return win;
  } else if (
    (playerSelection.toLowerCase() == "rock" &&
      computerSelection[computerPlay] == "paper") ||
    (playerSelection.toLowerCase() == "scissors" &&
      computerSelection[computerPlay] == "rock") ||
    (playerSelection.toLowerCase() == "paper" &&
      computerSelection[computerPlay] == "scissors")
  ) {
    computerScore++;
    return lose;
  } else if (playerSelection.toLowerCase() == computerSelection[computerPlay]) {
    tieScore++;
    return tie;
  } //if player input rock compare to rock, its a tie
  else {
    return "you must input rock, paper or scissors";
  } //else if player input paper compare to rock, you win
}

let computerSelection = ["rock", "paper", "scissors"]; //declare computerSelection
let computerPlay = Math.floor(Math.random() * computerSelection.length); //declare computerPlay

//define scores
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

//define win, lose or tie
const win = "You Win this round!\n -------";
const lose = "You Lose this round!\n -------";
const tie = "This round is a tie!\n -------";

//Check The player input is paper scissor rock
function playerInputToCheck(value) {
  if (value !== "rock" && value !== "paper" && value !== "scissors") {
    return false;
  } else {
    return true;
  }
}

//loop
function game() {
  for (let i = 0; i < 5; i++) {
    //what is going to be loop
    playerSelection = prompt("lets play rock paper scissors"); //define player, player input

    if (playerSelection === "exit") {
      return;
    }

    while (!playerInputToCheck(playerSelection.toLowerCase())) {
      playerSelection = prompt(
        "Please!! Write: rock, paper, scissors. -Lowercase! If You want to exit! Press: exit."
      );
      if (playerSelection === "exit") {
        return;
      }
    }
    console.log("you choose " + playerSelection.toLowerCase()); //show user input in lowercase
    computerSelection = ["rock", "paper", "scissors"]; //update computerSelection
    computerPlay = Math.floor(Math.random() * computerSelection.length); //update computerPlay

    console.log(
      "The computer choose " + computerPlay,
      computerSelection[computerPlay]
    ); //define computer input

    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    return "You Win this game.\n -------";
  }
  if (playerScore == computerScore) {
    return "This game is a tie.\n -------";
  } else {
    return "You Lose this game.\n -------";
  }
}

game(); //play the loop
console.log(
  `Your final score is ${playerScore} wins ${computerScore} loses and ${tieScore} draws.\n -------`
);
score = playerScore + computerScore + tieScore;
console.log("You played this game " + score + " times.\n -------\nGame over.");
