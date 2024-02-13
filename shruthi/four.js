class Account{
    acc_Id=101;
    acc_Name="shruthi"
    acc_Bal=50000
       

    open_Account(){
        console.log("Account opened successfully")
    }
    deposit_Account(){
        console.log("Amount deposited successfully")
    }
    withdrawl(){
        console.log("Insuffient bal")
    }
    get_Bal(){
        console.log("Server busy")
    }
    close_Account(){
        console.log("Bal is minus")
    }
}


let a1= new Account()
a1.open_Account()
a1.deposit_Account()
a1.withdrawl()
a1.get_Bal()
a1.close_Account()