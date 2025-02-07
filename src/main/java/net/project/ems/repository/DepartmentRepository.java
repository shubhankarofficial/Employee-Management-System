package net.project.ems.repository;

import net.project.ems.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository  extends JpaRepository<Department, Long> {
}
