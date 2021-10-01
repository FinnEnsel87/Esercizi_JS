class BankAccount {
    #contocorrente = 0;

    constructor (iniziale) {
        this.#contocorrente = iniziale;
    }
    deposit(value) {
        this.#contocorrente += value;
    }
    withdraw(value) {
        this.#contocorrente -= value;
    }
    view() {
        console.log(this.#contocorrente); 
    }

}



const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();