import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../core/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly url: String = environment.api+'category';

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' // Json type
      },
    )
  };
  constructor(private httpClient: HttpClient) { }

  

  getAll(){
    return this.httpClient.get(`${this.url}`, this.httpOptions);
  }

  getId(id){
    if(id != null && id > 0){
      return this.httpClient.get(`${this.url+'/'+id}`, this.httpOptions);
    }
  }

  save(category: Category){
    return this.httpClient.post(`${this.url}`, JSON.stringify(category) , this.httpOptions);
  } 
  update(category: Category,id:number){
    if(id != null && id > 0){
      return this.httpClient.put(`${this.url+'/'+id}`, JSON.stringify(category) , this.httpOptions);
    }
  } 
  destroy(id:number){
    if(id != null && id > 0){
      return this.httpClient.delete(`${this.url+'/'+id}`, this.httpOptions);
    }
  } 
  
}
