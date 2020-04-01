import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){

    this.productService.getAll()
                        .subscribe(
                          (res:any) => {
                            this.products = res.products;
                          },
                          (error) => { 
                            console.error(error);
                            }
                        );
  }

  destroy(product:Product){
    this.productService.destroy(product.id)
                        .subscribe((res: any) => {
                          this.getAll();                          
                        },
                          (error)  => { console.error(error); }
                        );
  }

}
