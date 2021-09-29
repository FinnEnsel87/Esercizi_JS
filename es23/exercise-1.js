const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

console.log(Object.keys(person));

// loop for of

for (property of Object.keys(person)) {
  console.log(property + ':' + person[property])
}

// chiedi perchè sintassi 