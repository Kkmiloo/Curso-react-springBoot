package com.camilo.springboot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.camilo.springboot.entities.Supplier;
import com.camilo.springboot.repository.SupplierRepository;

@Service
public class SupplierService implements ISupplierService {

    @Autowired
    SupplierRepository repository;

    @Override
    public List<Supplier> getAll() {
        return (List<Supplier>) repository.findAll();
    }

    @Override
    public Supplier getById(Long id) {
        return repository.findById(id).get();
    }

    @Override
    public void remove(Long id) {

        repository.deleteById(id);
    }

    @Override
    public void save(Supplier supplier) {

        repository.save(supplier);
    }

}
