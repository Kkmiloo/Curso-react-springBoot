package com.camilo.springboot.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.camilo.springboot.entities.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
