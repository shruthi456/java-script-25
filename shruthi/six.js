class Account{
    acc_Bal = 0;
    
    deposit_Amount(amount){
        this.acc_Bal= this.acc_Bal+amount
        console.log("amount deposited successfully")
    }
}
let a1 = new Account()
let a2 = new Account()
console.log(a1)
console.log(a2)

a1.deposit_Amount(5000)
a1.deposit_Amount(10)
a2.deposit_Amount(6000)
console.log(a1)
console.log(a2)