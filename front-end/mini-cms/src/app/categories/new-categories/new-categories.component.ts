import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Category } from './../../core/models';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesModule } from '../categories.module';

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
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  get updating() { return Boolean(this.id); }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.loadCategory(this.id);
    }
  }
  public loadCategory(id: number) {
    this.categoryService.getId(id)
    .subscribe(
      (res : any) => {
        this.category = res.category;
      },
      (error) => { 
        this.router.navigate(['/categories/new']);
      }
   );
 }
  onSubmit(form){
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
  update() {
    this.categoryService.update(this.category, this.id)
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
      this.message = "Categoria atualizada com sucesso";
      return;
    }
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
