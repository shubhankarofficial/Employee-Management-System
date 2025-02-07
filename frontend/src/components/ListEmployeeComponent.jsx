import React, {useEffect, useState} from 'react'
import { deleteEmp, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';


const ListEmployeeComponent = () => {
    const [employees, setEmployees]= useState([]);
    const navigator = useNavigate();
    useEffect(()=> getAllEmployees() , []);
  function getAllEmployees(){
        listEmployees().then((response)=> {
            setEmployees(response.data);
        }).catch((error)=> {
            console.error(error);
        })
  }
  function addNewEmployee(){
    navigator('/add-employee');
  }  
  function updateEmployee(id){
    navigator(`/edit-employee/${id}`);
  }
  function removeEmployee(id){
    deleteEmp(id).then((response)=> {
        getAllEmployees()
    })
  }
  return (
    <div className='container'>
        <h2 className='display-4 text-primary text-center mb-4'> List of Employees</h2>
        <button className='btn btn-info mb-2' onClick={addNewEmployee}> Add Employee</button>
        <table className='table table-dark table-hover'>
        <thead>
            <tr>
                <th> Employee id </th>
                <th> Employee First Name</th>
                <th> Employee Last Name</th>
                <th> Employee Email</th>
                <th> Actions </th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map(emp =>
                    <tr key = {emp.id}>
                        <td> {emp.id}</td>
                        <td> {emp.firstName}</td>
                        <td> {emp.lastName}</td>
                        <td> {emp.email}</td>
                        <td>
                            <button className='btn btn-primary' onClick={()=> updateEmployee(emp.id)}>Update</button>
                            <button className='btn btn-danger' onClick={()=> removeEmployee(emp.id)} style={{marginLeft: '10px'}}>Delete</button>
                        </td>
                    </tr>

                 )
            }
        </tbody>

        </table>

    </div>
  )
}
export default ListEmployeeComponent