import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../core/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly url: String = environment.api+'category';
  constructor(private httpClient: HttpClient) { }

  getAll(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'// ,
        // 'Authorization': 'Basic cDFAZy5jb206YWRtaW4='
        },
      )
    };
    return this.httpClient.get(`${this.url}`, httpOptions);
  }

  save(category: Category){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'// ,
        // 'Authorization': 'Basic cDFAZy5jb206YWRtaW4='
        },
      )
    };
    return this.httpClient.post(`${this.url}`, JSON.stringify(category) , httpOptions);
  } 
}
