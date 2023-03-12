package com.camilo.springboot.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.camilo.springboot.entities.Customer;
import com.camilo.springboot.services.ICustomerService;

// Los controllers son el punto de acceso GateWay
@RestController
@CrossOrigin
public class CustomerController {

    @Autowired
    private ICustomerService service;

    @GetMapping("api/customers")
    public List<Customer> getAll() {
        return service.getAll();
    }

    @GetMapping("api/customers/{id}")
    public Customer getById(@PathVariable String id) {
        return service.getById(Long.parseLong(id));
    }

    @DeleteMapping("api/customers/{id}")
    public void removeById(@PathVariable String id) {
        service.removeById(Long.parseLong(id));
    }

    @PostMapping("api/customers")
    public void save(@RequestBody Customer customer) {
        service.save(customer);
    }
}
