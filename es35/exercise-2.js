class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
// usa extends (dalla lezione di Sciuti pensavo che super fosse per via delle variabili coi supereroi :D)
class Developer extends Person {
  constructor(firstName, lastName, role) {
    super(firstName, lastName);
    this.role = role;
  }
}

const developer = new Developer('Mario', 'Rossi', 'Front-end');
console.log(`${developer.firstName} ${developer.lastName} - ${developer.role}`);