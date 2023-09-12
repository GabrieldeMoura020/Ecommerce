import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubcategoriaService } from '../subcategoria.service';

@Component({
  selector: 'app-subcategoria-listar',
  templateUrl: './subcategoria-listar.component.html',
  styleUrls: ['./subcategoria-listar.component.css']
})
export class SubcategoriaListarComponent implements OnInit {
  
  
  public dados: Array<any> = [];
  
  
  constructor(
    public subcategoria_service: SubcategoriaService,
    public router: Router
  ){}
  
  ngOnInit(): void {
    this.subcategoria_service.listar()
    .on('value', (snapshot: any) => {

      //Limpa a váriavel local com os dados
      this.dados.splice(0, this.dados.length);

      //Dados retornados do Firebase
      let response = snapshot.val();

      //Não setar valores caso não venha nenhum registro
      if(response==null) return;

      Object.values(response).forEach((e: any, i: number) => {

        this.dados.push({
          descricao: e.descricao,
          indice: Object.keys(snapshot.val())[i]
        })
      })
    })
    
  }


  excluir(key: string){
    this.subcategoria_service.excluir(key);
  }

  editar(key: string) {
    this.router.navigate(['subcategoria/formulario/' + key])
  }

}