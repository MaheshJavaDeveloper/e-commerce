package com.app.idealo.repo;

import com.app.idealo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepositry extends JpaRepository<Product, Long> {
}
