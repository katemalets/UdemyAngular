package spring.boot.angular.springbootecommerce.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import spring.boot.angular.springbootecommerce.entity.Product;

@CrossOrigin
public interface ProductRepository extends JpaRepository<Product, Long> {

     Page<Product> findByCategoryId(@RequestParam("id") long id,Pageable pageable);

     Page<Product> findByNameContaining(@RequestParam("name") String name,Pageable pageable);
}
