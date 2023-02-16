function toCelcius(fahrenheit) {

  if (typeof fahrenheit !== 'number' || isNaN(fahrenheit)) {
    return "Invalid input. Please enter a number.";
  }

  const celsius = ((Number(fahrenheit) - 32) * 5) / 9;
  return celsius;
}

const fahrenheit1 = Number(prompt());
const celsius1 = toCelcius(fahrenheit1);
console.log(`${fahrenheit1} degrees Fahrenheit = ${Math.trunc(celsius1)} degrees Celsius`);

const fahrenheit2 = Number(prompt());
const celsius2 = toCelcius(fahrenheit2);
console.log(`Temperature of ${fahrenheit2} Fahrenheit is equivalent to ${Math.trunc(celsius2)} degrees Celsius`);

const fahrenheit3 = Number(prompt());
const celsius3 = toCelcius(fahrenheit3);
console.log(`Water boiling temperature is ${fahrenheit3} Fahrenheit or ${Math.trunc(celsius3)} Celsius`);