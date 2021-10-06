const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

//const { id, name, surname, old } = person;

// visto da esempio sciuti, prendiamo le proprietà e le assegnamo ai nuovi parametri( ovvero variabili con nomi diversi ?
const { id, firstName: name, lastName: surname, age: old } = person;

  console.log(id, name, surname, old);