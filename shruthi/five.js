class Account{
    acc_Id=101;
    acc_Name="sushma"
    acc_Bal=65000

    deposit_Amount(amount){
        console.log(amount,":Amount Deposited Successfully")
    }
}

let a1 = new Account()
a1.deposit_Amount(5000)

let a2 = new Account()
a2.deposit_Amount(10)