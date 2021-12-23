class User {
    constructor(username, emailAddress) {  // now our method has 2 parameters!        
        this.name = username	           // and we use the values passed in to set the name attribute        
        this.email = emailAddress	   // and the email attribute        
        this.accountBalance = 0		   // the account balance is set to $0, so no need for a third parameter
    }
    makeDeposit(amount) {                // takes a parameter this is the amount of the deposit
        this.accountBalance += amount;   // the specific user's account increases by the amount of the value received
}
}


const guido = new User("Guido van Rossum", "guido@python.com");
const monty = new User("Monty Python", "monty@python.com");
console.log(guido.name);	// output: Guido van Rossum
console.log(monty.name);	// output: Monty Python



guido.makeDeposit(100)
guido.makeDeposit(200)
monty.makeDeposit(50)
console.log(guido.accountBalance)	// output: 300
console.log(monty.accountBalance)	// output: 50
