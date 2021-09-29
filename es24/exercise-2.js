const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

console.log(Object.values(person));

for (property of Object.values(person)) {
  console.log(property)
}
// Print values of person using Object.values