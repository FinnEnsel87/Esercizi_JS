function greet(greeting) {
    return function greetingAll(name) {
        return greeting + ' ' + name
    }
}


// ritorna la funzione interna "greetingAll()" con valori diversi ( mantiene in vita )
//    è una funzione che ha in memoria il parametro della funzione esterna
const greetWithHello = greet('Hello');
const greetWithBye = greet('Bye');
const greetWithHi = greet('Hi');
// 
const greetPaulWithHello = greetWithHello('Paul');
const greetPaulWithHi = greetWithHi('Paul');
const greetJohnWithBye = greetWithBye('John');
const greetSimonWithHello = greetWithHello('Simon');

//in esecuzione va in memoria il valore greeting
console.log(greetPaulWithHello);
console.log(greetPaulWithHi);
console.log(greetJohnWithBye);
console.log(greetSimonWithHello);