package pinheiro.leandro.backendjava.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import com.sun.istack.NotNull;

@Entity
public class Product {

	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;    
	@NotNull
    private String name;
	@NotNull
    private Double price;
	@NotNull
    private Float stock;
    @ManyToOne
    @NotNull
    @JoinColumn(name = "category_id")
    private Category category;
    
    public Product() {}
    
	public Product(Integer id, String name, Double price, Float stock, Category category) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.stock = stock;
		this.category = category;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public Float getStock() {
		return stock;
	}
	public void setStock(Float stock) {
		this.stock = stock;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}	
}
