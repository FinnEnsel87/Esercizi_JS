function calculate() {
  let finalResult = 0;
  return {
    add(x) {
      finalResult = finalResult + x
      return this;
    },
    multiply(x) {
      finalResult = finalResult * x
      return this;
    },
    sub(x) {
      finalResult = finalResult - x
      return this;
    },
    divide(x) {
      finalResult = finalResult / x
      return this;
    },
    printResult() {
      console.log(finalResult);
    },
  };

}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7