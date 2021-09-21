function sumUntil(maxValue) {
  let x = 0;
  for (let i = 1; i <= maxValue; i++) {
    x += i
  }
  return x
}

console.log(sumUntil(5));