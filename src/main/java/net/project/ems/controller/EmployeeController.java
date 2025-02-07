package net.project.ems.controller;

import lombok.AllArgsConstructor;
import net.project.ems.dto.EmployeeDto;
import net.project.ems.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController {
    private  EmployeeService employeeService;

    // Build Add Employee
    @PostMapping("createEmp")
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto savedEmp= employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmp, HttpStatus.CREATED);
    }
    //Get ny Id
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@ PathVariable Long id){
        EmployeeDto empDTO = employeeService.getEmployeeById(id);
        return new ResponseEntity<>(empDTO, HttpStatus.OK);
    }
    //Get all Employees
    @GetMapping("allEmp")
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto> empList = employeeService.getAllEmployees();
        return new ResponseEntity<>(empList, HttpStatus.OK);
    }
    //Update by id
    @PostMapping("/update/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable Long id, @RequestBody EmployeeDto employeeDto){
        EmployeeDto emp = employeeService.updateEmployee(id,employeeDto);
        return new ResponseEntity<>(emp, HttpStatus.OK);
    }
// Delete by id
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployeeById(@PathVariable Long id){
        employeeService.deleteEmployeeById(id);
        return new ResponseEntity<>("Employee Deleted Successfully", HttpStatus.OK);
    }


}
