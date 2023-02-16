function calculator() {
  let firstNumber = prompt("Enter first number:");

  if (isNaN(firstNumber) || !Number.isInteger(Number(firstNumber))) {
    console.log("Sorry, " + firstNumber + " is not a valid entry.");
    return;
  }

  let secondNumber = prompt("Enter second number:");

  if (isNaN(secondNumber) || !Number.isInteger(Number(secondNumber))) {
    console.log("Sorry, " + secondNumber + " is not a valid entry.");
    return;
  }

  let operation = prompt("Enter the operation");

  if (
    operation !== "/" &&
    operation !== "*" &&
    operation !== "+" &&
    operation !== "-" &&
    operation !== "%"
  ) {
    console.log("Sorry, " + operation + " is not a valid entry.");
    return;
  }

  let result;

  if (operation === "-") result = Number(firstNumber) - Number(secondNumber);
  else if (operation === "+")
    result = Number(firstNumber) + Number(secondNumber);
  else if (operation === "*")
    result = Number(firstNumber) * Number(secondNumber);
  else if (operation === "/") {
    if (Number(secondNumber) === 0) {
      console.log("Can't divide by 0");
      return;
    }
    result = Number(firstNumber) / Number(secondNumber);
  } else {
    if (Number(secondNumber) === 0) {
      console.log("Can't modulo by 0");
      return;
    }
    result = Number(firstNumber) % Number(secondNumber);
  }

    console.log(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
}

calculator();
