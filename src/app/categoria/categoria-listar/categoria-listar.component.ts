import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.css']
})
export class CategoriaListarComponent implements OnInit {
  public dados: Array<any> = [];

  constructor(

    public categoria_service:CategoriaService,
    public router: Router
  ) {

  }
  ngOnInit(): void {
    this.listar();
   }

  excluir(key: number) {
    this.categoria_service.excluir(key).subscribe(
      () => {
        this.listar();
      }
    );  
  }
  
  editar(key: string) {
    this
    .router
    .navigate(['/categoria/formulario/' + key]);

  }

  listar(){
    this.categoria_service.listar().subscribe((_dados:any) =>{
      this.dados = _dados;
    });
  }
}