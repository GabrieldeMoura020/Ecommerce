import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(
    public http: HttpClient
  ) { }

  post(formData:any, rota:string = ''){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*'
      })
    };
    return this.http.post('/' + rota,formData,httpOptions);
  }
  
}