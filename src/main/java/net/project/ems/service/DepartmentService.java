package net.project.ems.service;

import net.project.ems.dto.DepartmentDto;

import java.util.List;

public interface DepartmentService {
    DepartmentDto createDepartment(DepartmentDto departmentDto);
    DepartmentDto getDepartment(Long id);
    List<DepartmentDto> getAllDepartments();
    DepartmentDto updateDepartment(Long id, DepartmentDto updatedDepartmentDto);
    void deleteDepartment(Long id);
}
