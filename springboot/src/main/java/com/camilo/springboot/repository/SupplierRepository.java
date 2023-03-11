package com.camilo.springboot.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.camilo.springboot.entities.Supplier;

@Repository
public interface SupplierRepository extends CrudRepository<Supplier, Long> {

}
