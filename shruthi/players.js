const players=[
    {name:"ranaldo",age:37,
     teams:["madrid","united"]},
     { names:"salah",age:30,
     teams:["romo","liverpool"]},
     { names:"bruyne",age:31,
     teams:["wolfsburg","city"]},
     { names:"haaland",age:22,
      teams:["dortmund","city"]}
]; 
console.table(
//players.filter(player=>player.age<30)
players.filter(p=>p.teams.includes("city"))
);
