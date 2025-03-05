// Today we will learn how to use if statements.
// These are a building blocks of programming.
// They allow us to fork our code and make decisions based on the data we have.
// Boolean (True/False) expressions are the fundamental building blocks of if statements.
// Boolean statments can be easy to understand, but can also be very complex.
// Over time you will learn how to write more complex boolean statements.

// Example
// Guess the number
function partOneA () {
  let answer, guess, guessNumber;
  answer = 7;
  guess = prompt("Guess a number between 1 and 10.");
  guessNumber = Number(guess);

  // 1. check if the number is equal to the answer
  if (guessNumber === answer) {
    // 2. if it is, set the message for correct.
    messageParagraph.innerHTML = `You guessed the number! It was ${answer}.`;
  } else {
    // 3. if not, set the message for wrong guess.
    messageParagraph.innerHTML = `You did not guess the number. Try again.`;
  }
}

// Try It!
// Try it with a different number
function partOneB () {
  alert("Try it!");
  let answer, guess, guessNumber;
  answer = 3;
  guess = prompt("Guess a number between 1 and 10.");
  guessNumber = Number(guess);

  // 1. check if the number is equal to the answer

    // 2. if it is, set the message for correct.

    // 3. if not, set the message for wrong guess.

}

// Example
// guess the number with a hint of higher or lower
function partTwoA () {
  let answer, guess, guessNumber;
  answer = 7;
  guess = prompt("Guess a number between 1 and 10.");
  guessNumber = Number(guess);

  // 1. check if the number is too low.
  if(guessNumber < answer) {
    // 2. if it is, set the message for too low.
    messageParagraph.innerHTML = `Your guess is too low. Try again.`;
  } else if (guessNumber > answer) {
    // 3. if not, set the message for too high.
    messageParagraph.innerHTML = `Your guess is too high. Try again.`;
  } else {
    // 4. if not, set the message for correct.
    messageParagraph.innerHTML = `You guessed the number! It was ${answer}.`;
  }

}

// Try it!
function partTwoB () {
  let answer, guess, guessNumber;
  answer = 7;
  guess = prompt("Guess a number between 1 and 10.");
  guessNumber = Number(guess);

  // 1. check if the number is too low.
  if (guessNumber < answer) {
    // 2. if it is, set the message for too low.
    message = "Too low! Try again.";
  }
    // 3. if not, set the message for too high.
    else if (guessNumber > answer) {
      message = "Too high! Try again.";
    }
    // 4. if not, set the message for correct.
    else {
      message = "Congratulations! You guessed the correct number.";
    }
    messageParagraph.innerHTML = message;
}

// Example
// Mood checker
function partThreeA () {
  let color;
  color = prompt("What color describes your mood today?");
  // 1. check if the color is blue
  if(color === "blue") {
    // 2. give the message for blue
    messageParagraph.innerHTML = `Are you feeling down?`;
  // 3. check for the next color
  } else if(color === "yellow") {
    // 4. give the message for yellow
    messageParagraph.innerHTML = `You must being have a good day!`;
  } else {
    // 5. otherwise, ask for another color
    messageParagraph.innerHTML = `Try another color.`;
  }
}

// Try it!
// Try with some other colors. 
// For ideas check https://99designs.com/blog/tips/how-color-impacts-emotions-and-behaviors/
function partThreeB () {
  let color;
  color = prompt("What color describes your mood today?");
  // 1. check for your first color
  if (color === "red") {
    messageParagraph.innerHTML = `Feeling passionate or angry?`;
  }
    // 2. give the message for this color
    else if (color === "green") {
      messageParagraph.innerHTML = `You must be feeling calm and refreshed.`;
    }
  // 3. check for the next color
  else if (color === "purple") {
    messageParagraph.innerHTML = `Feeling creative and inspired?`;
  }
    // 4. give the message for the next color
    else if (color === "black") {
      messageParagraph.innerHTML = `Are you feeling mysterious or powerful today?`;
    }
  // 5. otherwise, ask for another color
  else {
    messageParagraph.innerHTML = `Try another color.`;
  }
}

// Example
// Rock Paper Scissors
function partFourA () {
  let playerOne, playerTwo;
  playerOne = prompt("Player One, choose rock, paper, or scissors.");
  playerTwo = prompt("Player Two, choose rock, paper, or scissors.");
  if(playerOne === "rock" && playerTwo === "paper"){
    messageParagraph.innerHTML = "Player Two wins!";
  } else if (playerOne === "scissors" && playerTwo === "rock") {
    messageParagraph.innerHTML = "Player Two wins!";
  } else {
    messageParagraph.innerHTML = "It's a tie!";
  }
  // NOTE: This is not a complete game. You need to figure out all the possible outcomes for it to work properly.
}

// Try it!
// Can you implement Rock Paper Scissors?
// How many options are there?
// NOTE: If you miss some of the options, that's OK. 
// Try to catch as many as you can.
function partFourB () {
  alert("Try it!");
  let playerOne, playerTwo, message;

  playerOne = prompt("Player One, choose rock, paper, or scissors.").toLowerCase();

  playerTwo = prompt("Player Two, choose rock, paper, or scissors.").toLowerCase();



  // Check for a tie

  if (playerOne === playerTwo) {

    message = "It's a tie!";

  } 

  // Winning conditions for Player One

  else if (

    (playerOne === "rock" && playerTwo === "scissors") ||

    (playerOne === "paper" && playerTwo === "rock") ||

    (playerOne === "scissors" && playerTwo === "paper")

  ) {

    message = "Player One wins!";

  } 

  // Otherwise, Player Two wins

  else {

    message = "Player Two wins!";

  }



  messageParagraph.innerHTML = message;

}


}

// BONUS: Try and "prove" that you have all the options covered in the Rock Paper Scissors game. How many are there exactly? How are you certain of that? Write your answer as a comment.
