import './contentBody.css'
import { employees } from './data';
import DataTable from './dataTable';


export default function ContentBody(){
    return (
        <div className="container">

        <div className='heading'>
            <h1>Employee Management System</h1>
            <p>Click "View" to see detailed employee information (Prop drillling Demoo)</p>
        </div>

        <div className='table'>
            <div>ID</div>
            <div>Name</div>
            <div>Position</div>
            <div>Department</div>
            <div>Status</div>
            <div>Action</div>

        </div>
        
        {
            employees.map(emp =>(
                <DataTable key={emp.id} employee ={emp} />
            ))
        }

        </div>
    );
}