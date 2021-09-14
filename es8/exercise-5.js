function calculateAverageAge(persons) {
  let etaMedia = 0
  // ad ogni iterazione prende un elemento di persons
  for (let soggetto of persons) {
    etaMedia = etaMedia + soggetto.age   
  }
  return etaMedia / persons.length
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const averageAge = calculateAverageAge(persons);
console.log(persons);
console.log(averageAge);