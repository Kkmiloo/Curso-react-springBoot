package com.camilo.springboot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.camilo.springboot.entities.Customer;
import com.camilo.springboot.repository.CustomerRepository;

//Aca es donde esta la logica de negocio

@Service
public class CustomerService implements ICustomerService {

    @Autowired
    private CustomerRepository repository;

    @Override
    public List<Customer> getAll() {

        return (List<Customer>) repository.findAll();

    }

    @Override
    public Customer getById(Long id) {
        return (Customer) repository.findById(id).get();
    }

    @Override
    public void removeById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void save(Customer customer) {

        repository.save(customer);
    }
}
