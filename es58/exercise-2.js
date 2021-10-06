const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let persona = persons.find(item => item.id == id);
      if (persona) {
        return resolve(persona)
      }else reject('Nessun id')
    },1000)
  })
}

// senza il catch non trova il reject
fetchPersonById(4).then((person) => console.log(person)).catch(errore => console.log(errore))