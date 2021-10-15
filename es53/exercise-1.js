//function sum(num1, num2, num3, num4, num5) {
//    return num1 + num2 + num3 + num4 + num5;
//}

function sum(...num) {
   console.log(num.reduce((a, b) => a + b, 0))
}

sum(1, 2, 3, 4, 5);