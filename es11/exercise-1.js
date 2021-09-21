/* 
const sum = function (a, b) {
  return a + b;
}
*/

// ARROW FUNCTION
const sum = (a, b) => a + b;


/*
const log = function (value) {
  console.log(value);
}
*/

// ARROW FUNCTION
// 1 solo parametro posso omettere le parentesi
const log = value => console.log(value);

// richiamata const log alla quale è assegnata value che stampa il suo console.log
log(sum(2, 5));