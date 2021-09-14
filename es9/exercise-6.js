function getKeys(obj) {
  const keys = [];
  for (const key in obj) {  
    keys.push(key);
  }
  return keys;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);

console.log(keys);

