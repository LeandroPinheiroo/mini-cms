import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Product } from '../../core/models';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly url: String = environment.api+'product';

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

  save(product: Product){
    return this.httpClient.post(`${this.url}`, JSON.stringify(product) , this.httpOptions);
  } 

  update(product: Product,id:number){
    if(id != null && id > 0){
      return this.httpClient.put(`${this.url+'/'+id}`, JSON.stringify(product) , this.httpOptions);
    }
  } 
  
  destroy(id:number){
    if(id != null && id > 0){
      return this.httpClient.delete(`${this.url+'/'+id}`, this.httpOptions);
    }
  } 
}
