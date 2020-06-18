package spring.boot.angular.springbootecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import spring.boot.angular.springbootecommerce.entity.ProductCategory;

@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-categories")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory,Long> {
}
