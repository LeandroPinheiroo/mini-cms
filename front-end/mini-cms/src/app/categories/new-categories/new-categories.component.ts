import { Component, OnInit } from '@angular/core';

import { Category } from './../../core/models';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-new-categories',
  templateUrl: './new-categories.component.html',
  styleUrls: ['./new-categories.component.css']
})
export class NewCategoriesComponent implements OnInit {

  category = new Category();
  id: any;

  constructor(
    private categoryService: CategoryService,
  ) { }

  get update() { return /*Boolean(this.id);*/ false }

  ngOnInit(): void {

  }
  onSubmit(form){
    if(form.invalid){
      return;
    }
    if(this.update){
      console.log("Process");
      return;
    }
    this.save();
    console.log(this.category);
    
  }
  save() {
    this.categoryService.save(this.category)
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
    
  }
  error(){

  }

}
