import './App.css'

function App() {

  let array1=[1,2,3]
  let array2=[4,5,6]
  let array3=[array1,array2]
  console.log(array3)



  //with spread
  let array4=[...array1,...array2]
  console.log(array4)




  //person object
  let person={id:1,name:'Rashmi'}
  console.log(person)

  //update name of person obj
  person={...person,name:'rash'}
  console.log(person)

  //add new data to person
  person={...person,city:'pune'}
  console.log(person)

//array of object of employee
  let employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Frontend Developer",
    salary: 45000
  },
  {
    id: 2,
    name: "Priya Patil",
    role: "Backend Developer",
    salary: 55000
  },
  {
    id: 3,
    name: "Aman Verma",
    role: "UI/UX Designer",
    salary: 40000
  },
  {
    id: 4,
    name: "Sneha Joshi",
    role: "HR Manager",
    salary: 50000
  },
  {
    id: 5,
    name: "Karan Mehta",
    role: "QA Tester",
    salary: 42000
  }
];

employees.push({
  id: 6,
  name: "Neha",
  role: "HR",
  salary: 35000
});


console.log(employees);


//now iterate with for loop
for(let emp of employees)
{
  console.log(emp)
}

//sort with salary
employees.sort((a, b) => a.salary - b.salary);
console.log(employees);

//Using Map function
// let empData=employees.map((e) => e)
// console.log(empData)



  //add value to existing array
  let array5=[1,...array1,4]
console.log(array5)



//print the name of emp with id=1
let emp = employees.find(e => e.id === 1);
console.log(emp);

//display using foreach
employees.forEach(emp => {
  console.log(emp.name, emp.role);
});



let updated = employees.map(emp => ({
  ...emp,
  salary:5000
}));

console.log(updated)

  return (
    <>
    <center>
      <h1>Welcome to my app..</h1>

      {/* Display the array of object of employee in table */}


      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Role</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>

        {
          
          employees.map((e) => (
            
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name.toUpperCase()}</td>
            <td>{e.role}</td>
            <td>{e.salary}</td>
          </tr>

          ))
          }
        </tbody>
      </table>

    </center>
    </>
  )
}

export default App
