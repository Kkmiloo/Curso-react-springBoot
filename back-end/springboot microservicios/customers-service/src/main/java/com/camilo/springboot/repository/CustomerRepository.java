package com.camilo.springboot.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.camilo.springboot.entities.Customer;

//Conexión y logica con la base de datos

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {

}
