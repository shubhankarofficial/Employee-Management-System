import React, { useEffect } from 'react'
import { useState } from 'react'
import { createEmployee, getEmployee, updateEmp } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';
import { listAllDepartments } from '../services/DepartmentService';

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [departmentId, setDepartmentId] = useState('')
  const [departments, setDepartments] = useState([])

  useEffect(()=> {
    listAllDepartments().then((response)=> {
      setDepartments(response.data);
    }).catch((error)=> {
      console.error(error);
    })
  }, []);
  const {id} = useParams();
  const [errors,setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  });
  const navigator = useNavigate();
  useEffect( ()=> {
    if(id){
      getEmployee(id).then((response)=> {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
        setDepartmentId(response.data.departmentId);
      }).catch((err)=> {
        console.error(err);
      })
    }
  },[]);
  function handleFirstName(e){
    setFirstName(e.target.value);
  }
  function handleLastName(e){
    setLastName(e.target.value);
  }
  function handleEmail(e){
    setEmail(e.target.value);
  }
  function saveEmployee(e){
    e.preventDefault();
    if(validateForm()){
      const employee = {firstName,lastName,email,departmentId};
      if(id){
        updateEmp(id,employee).then((response)=> {
          console.log(response.data);
          navigator('/');
        }).catch((err)=> console.error(err))
      }else{
        createEmployee(employee).then((response)=> {
          console.log(response.data);
          navigator('/');
        })
      }
    }
  }
  function validateForm(){
    let valid = true;
    const errosCopy = {...errors};
    //fName validation check
    if(firstName.trim()){
      errosCopy.firstName= '';
    } else{
      errosCopy.firstName= 'First Name is required';
      valid = false;
    }
    //lName validation check
    if(lastName.trim()){
      errosCopy.lastName= '';
    } else{
      errosCopy.lastName = 'Last Name is required';
      valid = false;
    }
    //email validation check
    if(email.trim()){
      errosCopy.email= '';
    } else{
      errosCopy.email = 'Email is required';
      valid= false;
    }

    if(departmentId){
      errosCopy.department= ''
    } else{
      errosCopy.department= 'Select Department'
      valid= false;
    }
    setErrors(errosCopy);
    return valid;
  }
  function pageTitle(){
    if(id){
      return <h2 className='text-center'> Update Employee</h2>
    } else{
      return <h2 className='text-center'> Add Employee</h2>
    }



  }
  return (
    <div className='container'>
      <br/>
      <br/>
      <div className='row'>
      <div className='card col-md-6 offset-md-3 offset-md-3'>
        {
          pageTitle()
        }
        <div className='card-body'>
          <form>
            {/* //First Name */}
           <div className='form-group mb-2'>
            <label className='form-label'>First Name:</label>
            <input type='text' placeholder='Enter Employee First Name' name='firstName' value={firstName} className={`form-control ${errors.firstName ? 'is-invalid': '' }`} onChange={handleFirstName}>
            </input>
            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
           </div>
            {/* //Last Name */}
           <div className='form-group mb-2'>
            <label className='form-label'>Last Name:</label>
            <input type='text' placeholder='Enter Employee Last Name' name='lastName' value={lastName} className={`form-control ${errors.lastName ? 'is-invalid': '' }`} onChange={handleLastName}>
            </input>
            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
           </div>
            {/* //Email  */}
           <div className='form-group mb-2'>
            <label className='form-label'>Email:</label>
            <input type='text' placeholder='Enter Employee email address' name='email' value={email} className={`form-control ${errors.email ? 'is-invalid': '' }`} onChange={handleEmail}>
            </input>
            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
           </div>

            {/* depatment Set */}
           <div className='form-group mb-2'>
            <label className='form-label'>Select Department:</label>
            <select
                className={`form-control ${errors.department ? 'is-invalid': '' }`}
                value = {departmentId}
                onChange={(e)=> setDepartmentId(e.target.value)}

            >
              <option value="Select Department"></option>
              {
                departments.map( department => 
                  <option key= {department.id} value={department.id}> {department.name}</option>
                )
              }

            </select>
            {errors.department && <div className='invalid-feedback'>{errors.department}</div>}
           </div>


            {/* //button */}
            <button className='btn btn-success' onClick={saveEmployee}>Sumbit Details</button>
          </form>


        </div>
      </div>

      </div>




    </div>
  )
}

export default AddEmployeeComponent