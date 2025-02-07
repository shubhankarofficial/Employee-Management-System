import React, { useEffect, useState } from 'react'
import { addDepartment, getDepartmentById, updateDepartment } from '../services/DepartmentService';
import { useNavigate, useParams } from 'react-router-dom';

const DepartmentComponent = () => {
    const [departmentName, setDepartmentName]= useState('');
    const [departmentDescription, setDepartmentDescription]= useState('');
    const navigator= useNavigate();
    const {id} = useParams();

    useEffect(()=> {
        getDepartmentById(id).then((response)=> {
            setDepartmentName(response.data.name);
            setDepartmentDescription(response.data.departmentDescription);
        }).catch((error)=> {
            console.error(error);
        })

    }, [id]);
  function saveDeparment(e){
    e.preventDefault();

    const department= {name: departmentName,
        departmentDescription: departmentDescription
    };
    //console.log(department);

    if(id){
        updateDepartment(id,department).then((response)=> {
            //console.log(response.data);
            navigator('/departments');
        }).catch((error)=> {
            console.error(error);
        })
    } else{

    addDepartment(department).then((response)=> {
        console.log(response.data);
        navigator('/departments');
    }).catch((error)=> {
        console.error(error);
    });
  }
}  
  function pageTitle(){
    if(id){
        return <h2 className='text-center'> Update Deparmtent</h2>
    }else{
        return <h2 className='text-center'> Add Deparmtent</h2>
    }

  } 
  return (
    <div className='container'> <br/><br/> 
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitle()}
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'> 
                            <label className='form-label'> Department Name: </label>
                            <input type='text' name='departmentName' placeholder='Enter Department Name' value={departmentName} onChange={(e)=> setDepartmentName(e.target.value)} className='form-control'></input>
                        </div>

                        <div className='form-group mb-2'> 
                            <label className='form-label'> Department Description: </label>
                            <input type='text' name='departmentDescription' placeholder='Enter Department Description' value={departmentDescription} onChange={(e)=> setDepartmentDescription(e.target.value)} className='form-control'></input>
                        </div>
                        <button onClick={(e)=> saveDeparment(e)} className='btn btn-success mb-2'>Submit Details!</button>

                    </form>

                </div>

            </div> 
        </div>
    </div>
  )
}

export default DepartmentComponent