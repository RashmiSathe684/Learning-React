import React, { useState } from "react";
import "./App.css";

const EmployeeForm = () => {
  let [empform, setEmpform] = useState({
    id: "",
    empname: "",
    role: "",
    salary: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowAlert(true);

    console.log(empform);

    setEmpform({
      id: "",
      empname: "",
      role: "",
      salary: "",
    });
  };

  const handleChanges = (e) => {
    let { name, value } = e.target;

    setEmpform({ ...empform, [name]: value });
  };

  return (
    <div>
      <center>
        <form onSubmit={handleSubmit}>
          <h2>Employee Form</h2>

          Enter Your id :
          <input
            type="text"
            name="id"
            value={empform.id}
            onChange={handleChanges}
          />

          <br />
          <br />

          Enter Your name :
          <input
            type="text"
            name="empname"
            value={empform.empname}
            onChange={handleChanges}
          />

          <br />
          <br />

          Enter Your role :
          <input
            type="text"
            name="role"
            value={empform.role}
            onChange={handleChanges}
          />

          <br />
          <br />

          Enter Your salary :
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

        {/* Custom Alert Box */}
        {showAlert && (
          <div className="alert-overlay">
            <div className="alert-box">
              <h2>✅ Employee Added</h2>
              <p>Employee added successfully!</p>

              <button onClick={() => setShowAlert(false)}>
                OK
              </button>
            </div>
          </div>
        )}
      </center>
    </div>
  );
};

export default EmployeeForm;