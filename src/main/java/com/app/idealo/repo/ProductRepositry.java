package com.app.idealo.repo;

import com.app.idealo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepositry extends JpaRepository<Product, Long> {
    List<Product> findByCategory(String category);
}
