package pinheiro.leandro.backendjava.resource;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import pinheiro.leandro.backendjava.model.Product;
import pinheiro.leandro.backendjava.repository.Products;

public class ProductResource {
	
	@Autowired
	private Products products;
	
	@GetMapping("/{id}")
	public ResponseEntity<?> get(@Valid @PathVariable Integer id){
		Optional<Product> product = this.products.findById(id);
								
		return (product.isPresent()) ? 
			ResponseEntity.ok(product.get()) :
					ResponseEntity.notFound().build();
	}	
	
	@GetMapping
	public  List<Product> getAll(){
		return this.products.findAll();
	}
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Product> create(@Valid @RequestBody Product product, HttpServletResponse response) {
		
		Product productSave = this.products.save(product);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")				
				          .buildAndExpand(productSave.getId()).toUri() ;
		response.setHeader("Location", uri.toASCIIString());
		
		return ResponseEntity.created(uri).body(productSave);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Integer id) {
		products.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Product> atualizar(@PathVariable Integer id, @Valid @RequestBody Product product) {

		Optional<Product> optional = this.products.findById(id);
		
		Product productSave = optional.get();
		BeanUtils.copyProperties(product, productSave, "id");

		this.products.save(productSave);
		
		return ResponseEntity.ok(productSave);
	}

}
