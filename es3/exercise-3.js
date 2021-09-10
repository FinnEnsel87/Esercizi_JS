const students = ['Paul', 'George', 'Lucas'];
function addStudent(student) {
  students.push(student)
  // array essendo di type reference posso cambiare i valori che sono in memoria dell'array con delle proprietà ( Array.push ) 
  //perchè non si tratta di una nuova assegnazione della const
}

addStudent('Marco');
// posso anche mettere console.log dentro funzione  ?
console.log(students);