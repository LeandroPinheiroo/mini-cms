import { Component, OnInit } from '@angular/core';
import { ErrorHandleService } from './../../core/error-handle.service';

import { Category } from './../../core/models';
import { FormControl } from '@angular/forms';
import { CategoryService } from './../category.service';
import { Router } from '@angular/router';

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
    private router: Router,
    private errorHandler: ErrorHandleService,
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
    console.log(form);
    
  }
  public save() {

    return this.categoryService.save(this.category)
              .subscribe( (data: any) => {
                this.router.navigate(['/category']);
              },
              erro => {
                this.errorHandler.handle(erro);
              });
  }

}
