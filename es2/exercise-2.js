function canPlay() {

  const personName = 'Paul';
  if (true) {
    // Mi da errore poiché const è un value che non può essere altereato dall'app nella normale esecuzione.
     personName = 'George';
  }

  personName += ' plays football';

  console.log(personName);
}

canPlay()