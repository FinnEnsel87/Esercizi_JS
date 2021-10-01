// set inserisce dall'esterno delle proprietà
const person = {
    set firstName(value) {
        this._firstName = value;
    },
    get firstName() {
    return this._firstName
},
    set lastName(value) {
        this._lastName = value;
    },
    get lastName() {
      return this._lastName
    },
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
const simon = Object.create(person);
simon.firstName = 'Simon';
simon.lastName = 'Collins';

const john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';

console.log(john.fullName); // John Doe
console.log(simon.fullName); // Simon Collins

// ------

const person = {
    firstName: '',
 
    lastName: '',
    
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const john = Object.create(person)
john.firstName = 'John';
john.lastName = 'Doe';

const simon = Object.create(person);
simon.firstName = 'Simon';
simon.lastName = 'Collins';

console.log(person.fullName());// vuoto

