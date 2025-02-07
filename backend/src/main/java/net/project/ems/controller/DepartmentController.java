package net.project.ems.controller;

import lombok.AllArgsConstructor;
import net.project.ems.dto.DepartmentDto;
import net.project.ems.service.DepartmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/departments")

public class DepartmentController {
    private DepartmentService departmentService;

    //Build or create Department
    @PostMapping("createDep")
    public ResponseEntity<DepartmentDto> addDepartment(@RequestBody DepartmentDto departmentDto) {
       DepartmentDto savedDep=  departmentService.createDepartment(departmentDto);
       return new ResponseEntity<>(savedDep, HttpStatus.CREATED);
    }

    // Get a particular department by ID.
    @GetMapping("{id}")
    public ResponseEntity<DepartmentDto> getDepartmentById( @PathVariable Long id) {
        DepartmentDto reqDep = departmentService.getDepartment(id);
        return new ResponseEntity<>(reqDep, HttpStatus.OK);
    }

    // Get all Departments
    @GetMapping
    public ResponseEntity<List<DepartmentDto>> getAllDepartments() {
        List<DepartmentDto> allDep = departmentService.getAllDepartments();
        return new ResponseEntity<>(allDep, HttpStatus.OK);
    }

    //Update a department
    @PutMapping("{id}")
    public ResponseEntity<DepartmentDto> updateDepartment( @PathVariable Long id ,@RequestBody DepartmentDto departmentDto) {
        DepartmentDto savedDepartment = departmentService.updateDepartment(id, departmentDto);
        return new ResponseEntity<>(savedDepartment, HttpStatus.OK);
    }

    // Delete a department by its id.
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteDepartment(@PathVariable Long id) {
        departmentService.deleteDepartment(id);
        return new ResponseEntity<>("Department deleted", HttpStatus.OK);
    }

}
