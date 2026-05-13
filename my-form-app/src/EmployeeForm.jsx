import React, { useState } from "react";

const EmployeeForm = () => {
  let [empform, setEmpform] = useState({
    id: "",
    empname: "",
    role: "",
    salary: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(empform);
    setEmpform({ id: "", empname: "", role: "", salary: "" });
  };

  const handleChanges = (e) => {
    let { name, value } = e.target;
    setEmpform({ ...empform, [name]: value });
  };

  const handleClick = () => {
    console.log(empform.id);
    console.log(empform.empname);
    console.log(empform.role);
    console.log(empform.salary);
  };

  return (
    <div>
      <center>
        <form onSubmit={handleSubmit}>
          <h2>Employee Form</h2>
          Enter Your id :{" "}
          <input
            type="text"
            name="id"
            value={empform.id}
            onChange={handleChanges}
          />
          <br />
          <br />
          Enter Your name :{" "}
          <input
            type="text"
            name="empname"
            value={empform.empname}
            onChange={handleChanges}
          />
          <br />
          <br />
          Enter Your role :{" "}
          <input
            type="text"
            name="role"
            value={empform.role}
            onChange={handleChanges}
          />
          <br />
          <br />
          Enter Your salary :{" "}
          <input
            type="text"
            name="salary"
            value={empform.salary}
            onChange={handleChanges}
          />
          <br />
          <br />
          <button type="submit">Add Employee</button>
        </form>

        {/* <button type="button" onClick={handleClick}>Display Data to Console</button> */}
      </center>
    </div>
  );
};

export default EmployeeForm;
