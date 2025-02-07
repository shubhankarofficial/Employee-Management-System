package net.project.ems.mapper;

import net.project.ems.dto.DepartmentDto;
import net.project.ems.entity.Department;

public class DepartmentMapper {

    public static DepartmentDto mapToDepartmentDto(Department department) {
        return new DepartmentDto(department.getId(), department.getName(), department.getDepartmentDescription());
    }
    public static Department mapToDepartment(DepartmentDto departmentDto) {
        return new Department(departmentDto.getId(), departmentDto.getName(), departmentDto.getDepartmentDescription());
    }
}
