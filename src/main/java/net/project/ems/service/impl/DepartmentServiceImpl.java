package net.project.ems.service.impl;

import lombok.AllArgsConstructor;
import net.project.ems.dto.DepartmentDto;
import net.project.ems.entity.Department;
import net.project.ems.exception.ResourceNotFoundException;
import net.project.ems.mapper.DepartmentMapper;
import net.project.ems.repository.DepartmentRepository;
import net.project.ems.service.DepartmentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {
    private DepartmentRepository departmentRepository;
    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {
        Department department= DepartmentMapper.mapToDepartment(departmentDto);
        Department savedDepartment = departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }

    @Override
    public DepartmentDto getDepartment(Long id) {
        Department reqDepartment = departmentRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Department not found with id: " + id)
        );
        return DepartmentMapper.mapToDepartmentDto(reqDepartment);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {
        List<Department> departments = departmentRepository.findAll();
        return departments.stream().map((department)-> DepartmentMapper.mapToDepartmentDto(department)).toList();
    }

    @Override
    public DepartmentDto updateDepartment(Long id, DepartmentDto updatedDepartmentDto) {
        Department depToUpdate = departmentRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Department not found with id: " + id)
        );
        depToUpdate.setName(updatedDepartmentDto.getName());
        depToUpdate.setDepartmentDescription(updatedDepartmentDto.getDepartmentDescription());
        Department newUpdatedDepartment = departmentRepository.save(depToUpdate);
        return DepartmentMapper.mapToDepartmentDto(newUpdatedDepartment);
    }

    @Override
    public void deleteDepartment(Long id) {
        departmentRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Department not found with id: " + id));
        departmentRepository.deleteById(id);
    }


}
