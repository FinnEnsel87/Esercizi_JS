const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

// creo un oggetto vuoto al quale passo tutte le proprietà
const person2 = Object.assign({}, person1);

// cambio solo proprietà .firstname all'oggetto creato
person2.firstName = 'Simon';

console.log(person1);
console.log(person2);