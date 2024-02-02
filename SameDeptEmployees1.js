let employees = [
    {
        name:"Rameshwar",
        salary: 100000,
        dept: "Developer"
    },
    {
        name: "Shubham",
        salary: 50000,
        dept: "HR"
    },
    {
        name:"Sachin",
        salary: 200000,
        dept: "HR"
    },
    {
        name: "Akash",
        salary: 50000,
        dept: "Sales"
    },
    {
        name:"Pratiksha",
        salary: 1000000,
        dept: "Developer"
    },
    {
        name: "Rutik",
        salary: 50000,
        dept: "Sales"
    },
    {
        name: "Mayank",
        salary: 51000,
        dept: "Sales"
    },
    {
        name: "Sushil",
        salary: 55000,
        dept: "Sales"
    },
    {
        name: "Ujjwala",
        salary: 500000,
        dept: "HR"
    }
];

function getSameDeptEmployees(employees){
    let allSameDeptEmployees = [];
    let status = false;//if we got match of one dept then we need to add this in all dept array
    let count = 0;
    for(let i = 0; i < employees.length; i++){
        let sameDeptEmployees = [];
        for(let j = i + 1; j < employees.length; j++){
            if(employees[i].dept === employees[j].dept ){
               if(count == 0){//to store i'th location value ones if not use count then it store i multiple times when we get match
                sameDeptEmployees.push(employees[i]);
                count = 1;
               }
                sameDeptEmployees.push(employees[j]);
                status = true;
            }
        }
        count = 0;
        for(let k in allSameDeptEmployees){
            if(allSameDeptEmployees.length > 0 && sameDeptEmployees.length > 0){
                if(allSameDeptEmployees[k][k].dept === sameDeptEmployees[0].dept){
                    status = false;
                }
            }
        }
        if(status === true){
            allSameDeptEmployees.push(sameDeptEmployees);
            status = false;
        }
    }
    return allSameDeptEmployees;
}

console.log(getSameDeptEmployees(employees));