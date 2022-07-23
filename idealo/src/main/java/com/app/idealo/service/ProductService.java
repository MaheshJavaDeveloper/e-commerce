package com.app.idealo.service;

import com.app.idealo.model.Product;
import com.app.idealo.repo.ProductRepositry;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
@Slf4j
public class ProductService {

    @Autowired
    ProductRepositry productRepositry;

    public Product createProduct(Product product) {

        //Setting Default values
        product.setBestPriceDate(new Date());
        product.setHistoricalBestPrice(product.getCurrentPrice());
        product.setRating("5");
        product.setStatus(1);

        handlePrice(product);
        return productRepositry.save(product);
    }

    public Product updateProduct(Product product) {
        return productRepositry.save(product);
    }

    public void disableProduct(Long id) {
        Optional<Product> product = productRepositry.findById(id);
        if (product.isPresent()) {
            Product disableProduct = product.get();
            disableProduct.setStatus(0);
            productRepositry.save(disableProduct);
        }
    }

    public void deleteProduct(Product product) {
        productRepositry.delete(product);
    }

    public void handlePrice(Product product) {
        if (product.getCurrentPrice() <= product.getHistoricalBestPrice()) {
            product.setHistoricalBestPrice(product.getCurrentPrice());
            product.setBestPriceDate(new Date());
        }

    }
}
