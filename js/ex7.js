function guessNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  let numAttempts = 0;

  while (true) {
    let guess = prompt("Guess a number between 1 and 100");

    if (
      isNaN(guess) ||
      !Number.isInteger(Number(guess)) ||
      guess < 1 ||
      guess > 100
    ) {
      alert("Invalid input");
      continue
    }

    numAttempts++;

    if (Number(guess) < randomNumber) {
      alert("Too low, guess again");
    } else if (Number(guess) > randomNumber) {
      alert("Too high, guess again");
    } else {
      alert(
        `Correct! It took you ${numAttempts} attempts to guess the correct number.`
      );
      break;
    }
  }
}

guessNumber();
