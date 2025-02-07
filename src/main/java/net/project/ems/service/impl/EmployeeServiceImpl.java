package net.project.ems.service.impl;

import lombok.AllArgsConstructor;
import net.project.ems.dto.EmployeeDto;
import net.project.ems.entity.Department;
import net.project.ems.entity.Employee;
import net.project.ems.exception.ResourceNotFoundException;
import net.project.ems.mapper.EmployeeMapper;
import net.project.ems.repository.DepartmentRepository;
import net.project.ems.repository.EmployeeRespository;
import net.project.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRespository employeeRespository;
    private DepartmentRepository departmentRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Department department = departmentRepository.findById(employeeDto.getDepartmentId()).orElseThrow(
                () -> new ResourceNotFoundException("Department not found")
        );
        employee.setDepartment(department);
        Employee savedEmployee= employeeRespository.save(employee);
        return EmployeeMapper.mapToEmployeeDTO(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long id) {
        Employee emp= employeeRespository.findById(id).orElseThrow(()-> new ResourceNotFoundException("No Employee Found with id"));
        return EmployeeMapper.mapToEmployeeDTO(emp);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> empList = employeeRespository.findAll();

        return empList.stream().map((emp)-> EmployeeMapper.mapToEmployeeDTO(emp)).toList();
    }

    @Override
    public EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto) {
        Employee emp= employeeRespository.findById(id).orElseThrow(()-> new ResourceNotFoundException("No Employee Found with id"));
        emp.setFirstName(employeeDto.getFirstName());
        emp.setLastName(employeeDto.getLastName());
        emp.setEmail(employeeDto.getEmail());
        Department department = departmentRepository.findById(employeeDto.getDepartmentId()).orElseThrow(
                () -> new ResourceNotFoundException("Department not found")
        );
        emp.setDepartment(department);
        employeeRespository.save(emp);
        return EmployeeMapper.mapToEmployeeDTO(emp);
    }

    @Override
    public void deleteEmployeeById(Long id) {
        Employee emp= employeeRespository.findById(id).orElseThrow(()-> new ResourceNotFoundException("No Employee Found with id"));
        employeeRespository.deleteById(id);
    }
}
