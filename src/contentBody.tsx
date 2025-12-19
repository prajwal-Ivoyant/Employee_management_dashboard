import './contentBody.css'

import DataTable from './dataTable';


export default function ContentBody() {
    return (
        <div className="container">

            <div className='heading'>
                <h1>Employee Management System</h1>
                <p>Click "View" to see detailed employee information (Prop drillling Demoo)</p>
            </div>

            <DataTable />


        </div>
    );
}