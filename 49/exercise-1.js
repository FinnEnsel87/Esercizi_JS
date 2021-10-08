class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  funcToJson() {
    return JSON.stringify(this);
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);

// dichiarato semplicemente variabile al quale è applicato metodo stringify. 
let toJson = JSON.stringify(developer);
console.log(toJson);

//Visto da soluzione che andava creata funzione nella classe che richiamava oggetto this  
// console.log della funzione
console.log(developer.funcToJson());