import "./Employee.css";
import EmployeeList from "./EmployeeList";

function Employee() {
  let employeesList = [
    { name: "monika", designation: "Manager", salary: 60000 },
    { name: "Sharanya", designation: "CTO", salary: 50000 },
    { name: "Gaanavi", designation: "CEO", salary: 90000 },
    { name: "Sharad", designation: "Employee", salary: 30000 },
  ];
  return (
    <div>
      <h1>Employee Details</h1>
      {employeesList.map((emp) => {
        return (
          <EmployeeList
            name={emp.name}
            designation={emp.designation}
            salary={emp.salary}
          ></EmployeeList>
        );
      })}
    </div>
  );
}

export default Employee;
