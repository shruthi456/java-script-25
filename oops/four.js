class Account{
    acc_Name;
    acc_Email;
    constructor(name,email){
         console.log("Parent Class Constructor")
          this.acc_Name = name
          this.acc_Email = email
    }
}
class SA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal = 500;
    constructor(id, name,email,amount){
         super(name,email)
         this.acc_Id = id
         this.acc_Bal = amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}

class CA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal = 25000
    constructor(id,name,email,amount){
        super(name,email)
        this.acc_Id = id
        this.acc_Bal = amount
    }

get_Bal(){
    return this.acc_Bal - this.min_Bal
   }
}
let sal=new SA (101,"Rahul","RG@gmail.com",50000)

let cal=new CA(102,"Priyanka","pg@gmail.com",2500000);
//console.log(sal)
console.log(sal.get_Bal())

console.log(cal.get_Bal())