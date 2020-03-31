import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Product, Category } from 'src/app/core/models';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/categories/category.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {

  product = new Product();
  categories: Category[];
  id: any;
  submited: boolean;
  type = "danger";
  title = "Produto";
  message = "";
  @ViewChild('alert', { static: false }) alert: ElementRef;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  get updating() { return Boolean(this.id); }

  ngOnInit(): void {
    this.loadCategories();
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.loadProduct(this.id);
    }
  }
  public loadCategories(){
    this.categoryService.getAll()
    .subscribe(
      (res : any) => {
        this.categories = res.categories;
      },
      (error) => { 
        this.router.navigate(['/products/new']);
      }
   );
  }
  public loadProduct(id: number) {
    this.productService.getId(id)
    .subscribe(
      (res : any) => {
        this.product = res.product;
      },
      (error) => { 
        this.router.navigate(['/products/new']);
      }
   );
 }
  onSubmit(form){
    console.log(this.product);
    if(form.invalid){
      return;
    }
    if(this.updating){
      this.update();
      return;
    }
    this.save();
    form.resetForm();
    
  }
  save() {
    console.log(this.product);
    this.productService.save(this.product)
                    .subscribe(
                      (res) => {
                        this.success();
                      },
                      (error) => { 
                        this.error();
                        console.error(error);
                        }
                   );
                   
  }
  update() {
    this.productService.update(this.product, this.id)
                    .subscribe(
                      (res) => {
                        this.success();
                      },
                      (error) => { 
                        this.error();
                        }
                   );
                   
  }

  success(){
    this.submited = true;
    this.type = "success";
    if(this.updating){
      this.message = "Produto atualizado com sucesso";
      return;
    }
    this.message = "Produto cadastrado com sucesso";

  }
  error(){
    this.submited = true;
    this.type = "danger";
    this.message = "Erro ao cadastrar produto, tente novamente mais tarde!";
  }

  closeAlert(){
    this.alert.nativeElement.classList.remove('show');
  }

}
