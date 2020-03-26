import { Component, OnInit } from '@angular/core';

import { Category } from './../../core/models';
import { Router } from '@angular/router';
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
    private router: Router,
    private categoryService: CategoryService,
  ) { }

  get update() { return /*Boolean(this.id);*/ false }

  ngOnInit(): void {

  }
  onSubmit(form){

    if(this.update){
      console.log("Process");
      return;
    }
    this.save();
    console.log(this.category);
    
  }
  public save() {
    this.categoryService.save(this.category);
    
  }

}
