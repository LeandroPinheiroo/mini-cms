package pinheiro.leandro.backendjava.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pinheiro.leandro.backendjava.model.Product;

public interface Products extends JpaRepository<Product, Integer>{

}
