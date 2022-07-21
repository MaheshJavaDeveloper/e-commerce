package com.app.idealo.controller;

import com.app.idealo.exception.ResourceNotFoundException;
import com.app.idealo.model.Product;
import com.app.idealo.repo.ProductRepositry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1")
public class ProductController {

    @Autowired
    ProductRepositry productRepositry;

    @GetMapping("/products")
    public List<Product> getAllUsers() {
        return productRepositry.findAll();
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getUsersById(@PathVariable(value = "id") Long productId)
            throws ResourceNotFoundException {
        Product user =
                productRepositry
                        .findById(productId)
                        .orElseThrow(() -> new ResourceNotFoundException("Product not found on :: " + productId));
        return ResponseEntity.ok().body(user);
    }

}
