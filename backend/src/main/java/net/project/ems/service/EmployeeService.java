package net.project.ems.service;

import net.project.ems.dto.EmployeeDto;
import net.project.ems.entity.Employee;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(Long id);
    List<EmployeeDto> getAllEmployees();
    EmployeeDto updateEmployee(Long id,EmployeeDto employeeDto);
    void deleteEmployeeById(Long id);
}
