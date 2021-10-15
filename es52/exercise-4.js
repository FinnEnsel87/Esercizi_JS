const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};
// con onestà fatto in gruppo ma capito il perchè (JSON.stringify ritorna solo valori not undefined, quindi abbiamo reso stringhe undefined :-) )

let json = JSON.stringify(person,(key, value) => {
  if (typeof value == 'string') {
    return undefined;
  }
  return value;
})

// const json = JSON.stringify(person);

console.log(json); // Should return: { id: 1, age: 25 }