let employees = [
    {
        id: 101,
        name: "Rameshwar",
        salary: 100000,
        dept:"Developer"
    },
    {
        id: 102,
        name: "Shubham",
        salary: 80000,
        dept:"Tester"
    },
    {
        id: 103,
        name: "Pratiksha",
        salary: 200000,
        dept:"Developer"
    },
    {
        id: 104,
        name: "Sachin",
        salary: 50000,
        dept:"Sales"
    },
    {
        id: 105,
        name: "Akash",
        salary: 100000,
        dept:"HR"
    },
];


function getSameDeptEmployees(employees){
    let sameDeptEmployee = [];

    for(let i = 0; i < employees.length;i++){
        for(let j = 0; j < employees.length;j++){
            if(employees[i].dept === employees[j].dept && i != j){
                sameDeptEmployee.push(employees[i]);
            }
        }
    }
    return sameDeptEmployee;
}

console.log(getSameDeptEmployees(employees));
