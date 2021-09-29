const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;
person2.firstName = 'Simon' 

// essendo reference types hanno stessa referenza nella memoria dei dati contenuti nell'oggetto

console.log(person1);
console.log(person2);