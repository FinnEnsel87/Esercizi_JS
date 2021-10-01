const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};

// crei un nuovo oggetto con JSON al quale puoi implementare le proprietà senza modificare person1
const person2 = JSON.parse(JSON.stringify(person1));

person2.address.region = 'Lombardia';
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);