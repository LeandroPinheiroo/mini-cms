import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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
  submited: boolean;
  type = "danger";
  title = "Categoria";
  message = "";
  @ViewChild('alert', { static: false }) alert: ElementRef;


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
    form.resetForm();
    
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
    this.submited = true;
    this.type = "success";
    this.message = "Categoria cadastrada com sucesso";

  }
  error(){
    this.submited = true;
    this.type = "danger";
    this.message = "Erro ao cadastrar categoria Cadastrada, tente novamente mais tarde!";
  }

  closeAlert(){
    this.alert.nativeElement.classList.remove('show');
  }

}
