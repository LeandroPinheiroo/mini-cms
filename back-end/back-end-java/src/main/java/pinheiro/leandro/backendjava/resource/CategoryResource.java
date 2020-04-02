package pinheiro.leandro.backendjava.resource;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.http.ResponseEntity;

import pinheiro.leandro.backendjava.repository.Categories;
import pinheiro.leandro.backendjava.model.Category;

import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/category")
public class CategoryResource {
	
	@Autowired
	private Categories categories;
	
	@GetMapping("/{id}")
	public ResponseEntity<?> get(@Valid @PathVariable Integer id){
		Optional<Category> category = categories.findById(id);
								
		return (category.isPresent()) ? 
			ResponseEntity.ok(category.get()) :
					ResponseEntity.notFound().build();
	}	
	
	@GetMapping
	public  List<Category> getAll(){
		return this.categories.findAll();
	}	
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Category> create(@Valid @RequestBody Category category, HttpServletResponse response) {
		
		Category categorySave = categories.save(category);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")				
				          .buildAndExpand(categorySave.getId()).toUri() ;
		response.setHeader("Location", uri.toASCIIString());
		
		return ResponseEntity.created(uri).body(categorySave);
	}
	
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Integer id) {
		categories.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Category> atualizar(@PathVariable Integer id, @Valid @RequestBody Category category) {

		Optional<Category> optional = categories.findById(id);
		
		Category categorySave = optional.get();
		BeanUtils.copyProperties(category, categorySave, "id");

		categories.save(categorySave);
		
		return ResponseEntity.ok(categorySave);
	}	

}
