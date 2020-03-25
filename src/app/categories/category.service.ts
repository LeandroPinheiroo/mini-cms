import { Category } from './../core/models';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    url = 'http://localhost:8000/recurso';

    constructor(private http: HttpClient) { }

    save(category: Category) {

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'// ,
            // 'Authorization': 'Basic cDFAZy5jb206YWRtaW4='
            },
          )
        };
        return this.http.post(`${this.url}`, JSON.stringify(category) , httpOptions);
      }

}
