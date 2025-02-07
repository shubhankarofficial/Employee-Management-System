import axios from "axios";

const DEPARTMENT_REST_API_BASE_URL= 'http://localhost:8080/api/departments';

export const listAllDepartments = ()=> axios.get(`${DEPARTMENT_REST_API_BASE_URL}`);
export const addDepartment= (department)=> axios.post(`${DEPARTMENT_REST_API_BASE_URL}/createDep`,department);

export const getDepartmentById= (id)=> axios.get(`${DEPARTMENT_REST_API_BASE_URL}/${id}`);
export const updateDepartment = (id,department)=> axios.put(`${DEPARTMENT_REST_API_BASE_URL}/${id}`, department);
export const deleteDepartment= (id)=> axios.delete(`${DEPARTMENT_REST_API_BASE_URL}/${id}`);