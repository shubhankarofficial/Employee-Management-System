import axios from "axios";
const REST_API_BASE_URL= 'http://localhost:8080/api/employees';
export const listEmployees= () => axios.get(`${REST_API_BASE_URL}/allEmp`);
export const createEmployee= (employee) => axios.post(`${REST_API_BASE_URL}/createEmp`,employee);
export const getEmployee = (empId) => axios.get(`${REST_API_BASE_URL}/${empId}`);
export const updateEmp = (empId, emp)=> axios.post(`${REST_API_BASE_URL}/update/${empId}`,emp);
export const deleteEmp = (id)=> axios.delete(`${REST_API_BASE_URL}/${id}`);