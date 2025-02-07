import React, { useEffect, useState } from 'react';
import {deleteDepartment, listAllDepartments} from '../services/DepartmentService';
import { Link, useNavigate } from 'react-router-dom';

const ListDepartmentComponent = () => {
    const [departments,setDepartments] = useState([]);
    const navigator= useNavigate();
    useEffect(()=> {
        listOfDepartments();
    },[]);
    function listOfDepartments(){
        listAllDepartments().then((resp)=> {
            console.log(resp.data);
            setDepartments(resp.data);
        }).catch((error)=> {
            console.error(error);
        })
    }
    function updateDepartment(id){
        navigator(`/update-department/${id}`);
    }
    function removeDepartment(id){
        deleteDepartment(id).then((resposne)=> {
        listOfDepartments();    
        }).catch((error)=> {
            console.error(error);
        })
    }
  return (
    <div className='container'>
        <h2 className='text-center'>List of Departments</h2>
        <Link to= '/add-department' className='btn btn-info mb-2'> Add department</Link>
        <table className='table table-dark table-hover'>
            <thead>
                <tr>
                    <th> Department Id</th>
                    <th>Department Name</th>
                    <th>Department desription</th>
                    <th> Actions</th>
                </tr>
            </thead>
            <tbody> 
                {departments.map(dep => (
                    <tr key={dep.id}>
                        <td> {dep.id}</td>
                        <td> {dep.name}</td>
                        <td> {dep.departmentDescription}</td>
                        <td>
                            <button onClick={()=> updateDepartment(dep.id)} className='btn btn-primary'> Update </button>
                            <button onClick={()=> removeDepartment(dep.id)} className='btn btn-danger ' style={{marginLeft: '10px'}}> Delete </button>
                            
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ListDepartmentComponent