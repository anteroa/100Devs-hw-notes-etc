class Account {
    constructor(name){
        this.name = name;
        this.balance = 0;
    }
    credit(amount){
        this.balance += amount;
    }
    describe(){
        console.log(`owner: ${this.name}, balance: ${this.balance}`)
    }
}

let accounts = []

accounts[0] = new Account('Sean')
accounts[1] = new Account('Brad')
accounts[2] = new Account('George')

accounts.forEach(element => {
    element.credit(1000);
    element.describe();
});
