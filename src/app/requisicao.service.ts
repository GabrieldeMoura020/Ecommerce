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
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json'
      })
    };
      return this.http.post('/' + rota,formData,httpOptions);
  }
  get(_rota:string = '/'){
    return this.http.get("http://localhost:8080" + _rota);
  }
  del(_rota:string){
    return this.http.delete("http://localhost:8080" + _rota);
  } 


}