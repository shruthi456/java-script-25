let employees=[{id:101,name:"Nithya",sal:45000},
{id:102,name:"Sneha",sal:55000},
{id:103,name:"Priyanka",sal:65000},
{id:104,name:"Mouni",sal:75000},
{id:105,name:"Likhi",sal:185000},
{id:106,name:"shruthi",sal:35000},
]

function display_Data(){
    let rows=""
    employees.forEach((employee)=>{
        rows=rows+`<tr>
                            <td> ${employee.id} </td>
                            <td> ${employee.name} </td>
                            <td> ${employee.sal} </td>
        
                       </tr>`
    })

    document.getElementById('abc').innerHTML =rows;
    //document.getElementById('abc').innerHTML ="GM";
}