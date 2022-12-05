function EmployeeList(props) {
  return (
    <div style={{ border: "5px solid black" }}>
      <p>Name: {props.name}</p>
      <p>Designation:{props.designation}</p>
      <p>Salary:{props.salary}</p>
    </div>
  );
}

export default EmployeeList;
