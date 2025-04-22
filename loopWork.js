for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}

for (let i = 3; i <= 50; i += 3) {
  console.log(i);
}

function countEvenNumbers(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      count = count + 1;
    }
  }
  return count;
}

console.log(countEvenNumbers([2, 2, 2, 5, 4, 6, 8]));
