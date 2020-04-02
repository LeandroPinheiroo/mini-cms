package pinheiro.leandro.backendjava.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import pinheiro.leandro.backendjava.model.Category;

public interface Categories extends JpaRepository<Category, Integer>{

}
