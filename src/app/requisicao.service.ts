import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(
    public http: HttpClient
  ) { }

  get(){
    this.http.get("/").subscribe();
  }

  post(formData:any, rota:string = ''){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('/' + rota,formData,httpOptions);
  }
  
}