
type Employee = {
  id: number;
  name: string;
  position: string;
  department: string;
  status: string;
  action: string;
};

type Props ={
    employee : Employee
}


function fullDetails({employee} : Props){
    alert("hi hello")
}



export default function DataTable({employee} : Props){


if(!employee) return(
    <div>"ERROR"</div>
);

  return (
    <div className="table">
      <div>{employee.id}</div>
      <div>{employee.name}</div>
      <div>{employee.position}</div>
      <div>{employee.department}</div>
      <div>{employee.status}</div>
      <div onClick={()=>fullDetails(employee)}><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/view.png" alt="view"/>View</div>
    </div>
  );

}   