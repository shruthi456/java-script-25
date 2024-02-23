let goTomovie = (success,failure)=>{
    let acc_Bal = 1000;

    acc_Bal > 40000? success("go to movie! Enjoy")
                     :failure("take rest at home")

}

goTomovie((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})