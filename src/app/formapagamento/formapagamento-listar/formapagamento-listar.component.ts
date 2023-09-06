import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormapagamentoService } from '../formapagamento.service';

@Component({
  selector: 'app-formapagamento-listar',
  templateUrl: './formapagamento-listar.component.html',
  styleUrls: ['./formapagamento-listar.component.css']
})
export class FormapagamentoListarComponent implements OnInit{

  public dados: Array<any> = []

  constructor(
    public formapagamento_service: FormapagamentoService,
    public router: Router
  ) {}


  ngOnInit(): void {
    this.formapagamento_service.listar()
    .on('value', (snapshot: any) => {


      //Limpa a variável local com os dados
      this.dados.splice(0, this.dados.length);
      
      //Dados retornados do Firebase
      let response = snapshot.val();

      //Não setar valores caso não venha nenhum registro
      if(response == null) return;

      Object.values( response ).forEach( (e: any, i: number) => {


        //Adiciona os elementos no vetor de dados 
        this.dados.push({

          nome: e.nome,
          obs: e.obs,
          indice: Object.keys(snapshot.val())[i]
        })



      })
    })
  }

  excluir(key: string) {
    this.formapagamento_service.excluir(key)
  }

  editar(key: string) {
    this
    .router
    .navigate(['/formapagt/formulario/' + key])
  }

}