package com.camilo.springboot.services;

import java.util.List;

import com.camilo.springboot.entities.Employee;

public interface IEmployeeService {

    List<Employee> getAll();

    Employee getById(Long id);

    void remove(Long id);

    void save(Employee employee);
}
