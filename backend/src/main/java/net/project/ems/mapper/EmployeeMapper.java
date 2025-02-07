package net.project.ems.mapper;

import net.project.ems.dto.EmployeeDto;
import net.project.ems.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDTO(Employee employee) {
        return new EmployeeDto(employee.getId(), employee.getFirstName(), employee.getLastName(), employee.getEmail(), employee.getDepartment().getId());
    }
    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        Employee emp =  new Employee();
        emp.setId(employeeDto.getId());
        emp.setFirstName(employeeDto.getFirstName());
        emp.setLastName(employeeDto.getLastName());
        emp.setEmail(employeeDto.getEmail());
        return emp;
    }
}
