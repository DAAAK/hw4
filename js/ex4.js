function values() {
  const values = [3, 11, 7, 2, 9, 10];
  let sum = 0;
  let min = values[0];
  let max = values[0];

  for (let i = 0; i < values.length; i++) {
    sum += values[i];
    if (values[i] < min) {
      min = values[i];
    }
    if (values[i] > max) {
      max = values[i];
    }
  }

  console.log(`Sum of all array values: ${sum}`);
  console.log(`Minimum value: ${min}`);
  console.log(`Maximum value: ${max}`);
}

values()