package com.app.idealo.controller;

import com.app.idealo.exception.ResourceNotFoundException;
import com.app.idealo.model.Product;
import com.app.idealo.repo.ProductRepositry;
import com.app.idealo.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1")
@Slf4j
public class ProductController {
    @Autowired
    ProductRepositry productRepositry;
    @Autowired
    ProductService productService;

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

    @PostMapping("/product")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        log.info(String.valueOf(product));
        return ResponseEntity.ok().body(productService.createProduct(product));
    }

    @PatchMapping("/product")
    public ResponseEntity<Product> disableProduct(@RequestBody Product product) {
        productService.updateProduct(product);
        return ResponseEntity.ok().body(product);
    }

    @PatchMapping("/product/disable/{id}")
    public ResponseEntity<String> disableProduct(@PathVariable(value = "id") Long productId) {
        productService.disableProduct(productId);
        return ResponseEntity.ok().body("Product Disabled Successfully");
    }

}
