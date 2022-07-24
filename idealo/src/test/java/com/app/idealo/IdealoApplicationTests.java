package com.app.idealo;

import com.app.idealo.model.Product;
import com.app.idealo.service.ProductService;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class IdealoApplicationTests {

	@Test
	void testHistoricalBestPriceUpdated()  {
		Product product = new Product();
		product.setCurrentPrice(20);
		product.setHistoricalBestPrice(50);

		ProductService productService=new ProductService();
		productService.handlePrice(product);

		assertThat(product.getHistoricalBestPrice()).isEqualTo(product.getCurrentPrice());

	}

	@Test
	void testHistoricalBestPriceandDateUpdated()  {
		Product product = new Product();
		product.setCurrentPrice(20);
		product.setHistoricalBestPrice(50);

		ProductService productService=new ProductService();
		productService.handlePrice(product);

		assertThat(product.getHistoricalBestPrice()).isEqualTo(product.getCurrentPrice());
		assertThat(product.getBestPriceDate()).isNotNull();

	}

	@Test
	void testHistoricalBestPriceNotUpdated()  {
		Product product = new Product();
		product.setCurrentPrice(20);
		product.setHistoricalBestPrice(10);

		ProductService productService=new ProductService();
		productService.handlePrice(product);

		assertThat(product.getHistoricalBestPrice()).isEqualTo(10);

	}

	@Test
	void testHistoricalBestPriceDateNotUpdated()  {
		Product product = new Product();
		product.setCurrentPrice(20);
		product.setHistoricalBestPrice(10);

		ProductService productService=new ProductService();
		productService.handlePrice(product);

		assertThat(product.getHistoricalBestPrice()).isEqualTo(10);
		assertThat(product.getBestPriceDate()).isNull();
	}

}
