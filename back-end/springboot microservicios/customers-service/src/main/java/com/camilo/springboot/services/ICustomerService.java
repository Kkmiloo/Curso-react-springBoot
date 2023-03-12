package com.camilo.springboot.services;

import java.util.List;

import com.camilo.springboot.entities.Customer;

public interface ICustomerService {

    List<Customer> getAll();

    Customer getById(Long id);

    void removeById(Long id);

    void save(Customer customer);
}
