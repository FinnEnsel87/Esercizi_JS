/*
const sum = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  return a / b;
}

const log = function (value) {
  console.log(value);
}
*/

//ARROW FUNCTION
const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const log = value => console.log(value);

// operazione matematica: `((2 + 4) * (5 + 2) - 2) / 5`
                                                                                                  //   (   a    ,    b    )
// vengono passati sia parametri come numeri che come funzioni (es. in multiply i parametri (a,b) sono (sum(a,b), sum(a,b)) 

log(divide(subtract(multiply(sum(2, 4), sum(5, 2)), 2), 5));
