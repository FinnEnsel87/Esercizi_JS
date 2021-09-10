// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000

function calculateSalary(role) {
    
    //dato in input un ruolo
    if (role === 'ceo') {
        return 'Ceo => ' + 2200 + currency;
    }
    else if (role === 'manager') {
        return 'Manager => ' + 1800 + currency;
    }
    else if (role === 'cto') {
        return 'Cto => ' + 1800 + currency;
    }
    else if (role === 'developer') {
        return 'Developer => ' + 1800 + currency;
    }
    else
        return 'other => ' + 1000 + currency;
}

const currency = '€';

// alle variabili è assegnata la funzione calculateSalary che ritorna il parametro integrato col salario corrispondente 
const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);