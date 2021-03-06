import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../category.service';
import { Category } from '../../../core/models';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  categories: Category[];

  constructor(
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.getAll();
    
  }

  getAll(){

    this.categoryService.getAll()
                        .subscribe(
                          (res:any) => {
                            this.categories = res.categories;
                          },
                          (error) => { 
                            console.error(error);
                            }
                        );
  }
  destroy(category){
    this.categoryService.destroy(category.id)
                        .subscribe((res: any) => {
                          this.getAll();                          
                        },
                          (error)  => { console.error(error); }
                        );
  }
  

}
