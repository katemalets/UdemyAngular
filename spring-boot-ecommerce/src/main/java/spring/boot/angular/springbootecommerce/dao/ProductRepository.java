package spring.boot.angular.springbootecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import spring.boot.angular.springbootecommerce.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
